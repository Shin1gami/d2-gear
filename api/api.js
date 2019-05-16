const querystring = require('querystring');

const API = function () {
    this.options = {
        host: 'www.bungie.net',
        port: 443,
        path: '/Platform/',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'x-api-key': ''
        }
    };
};

API.prototype.call = function (path, query = null) {
    let options = this.options;
    options.path += path;

    if (query !== null) {
        options.path += '?' + querystring.stringify(query);
    }

    console.log('REQUEST:', options);

    return this.send(options).then(response => this.format(response));
};

API.prototype.send = function (options = {}) {
    return new Promise((resolve, reject) => {
        require('https').request(options, res => {
            resolve(res)
        }).on('error', err => {
            reject(err.message);
        }).end();
    });
};

API.prototype.format = function (response) {
    return new Promise((resolve, reject) => {
        let data = '';

        response.setEncoding('utf8');
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            try {
                console.log('RESPONSE:', data);

                resolve(JSON.parse(data));
            } catch (error) {
                console.log(error);

                reject({
                    ErrorCode: 500,
                    ErrorStatus: 'Exception',
                    Message: error.message
                });
            }
        });
    });
};

module.exports = API;