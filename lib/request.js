/**
 * Default request params
 * @type {Object}
 */
const defs = {
    host: '',
    port: 443,
    path: '',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
};

const STATUS_OK = 200;
const STATUS_ERR = 500;

/**
 *
 * @param status
 * @param message
 * @param data
 * @return {{data, _t: number, message: *, status: number}}
 * @private
 */
function _resp(status = STATUS_OK, message = null, data = {}) {
    return {
        status: status,
        message: message,
        data: data,
        _t: Math.floor(Date.now() / 1000)
    };
}

/**
 * Common request methods
 */
module.exports = {
    /**
     * Calls specified host
     * @param {Object} options
     * @return {Promise}
     */
    call: function (options = {}) {
        let _headers = Object.assign({}, defs.headers, options.headers || {});
        let _options = Object.assign({}, defs, options, {headers: _headers});

        return new Promise((resolve, reject) => {
            require('https').request(_options, res => {
                resolve(res)
            }).on('error', err => {
                reject(err.message);
            }).end();
        });
    },

    /**
     * Formats response into json object
     * @param {Object} response
     * @return {Promise}
     */
    format: function (response) {
        return new Promise((resolve) => {
            let data = '', status = STATUS_OK, message = null;

            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                data += chunk;
            });
            response.on('end', () => {
                try {
                    data = JSON.parse(data);

                    if (data['ErrorStatus'] !== undefined) {
                        status = data['ErrorStatus'] === 'Success' ? STATUS_OK : STATUS_ERR;
                    }

                    if (data['Message'] !== undefined) {
                        message = data['Message'];
                    }

                    if (data['Response'] !== undefined) {
                        data = data['Response'];
                    }

                    resolve(_resp(status, message, data));
                } catch (error) {
                    resolve(_resp(STATUS_ERR, error.message));
                }
            });
        });
    }
};