const request = require('../lib/request');
const qs = require('querystring');

/**
 * Default request params
 * @type {Object}
 */
const defs = {
    host: 'www.bungie.net',
    port: 443,
    path: '/Platform/',
    headers: {
        'x-api-key': ''
    }
};

const API = function () {
    /**
     * @type {Object}
     */
    this.options = defs;

    /**
     * @param {String} path
     * @param {Object} query
     * @return {Promise}
     */
    this.call = function (path, query = null) {
        let options = Object.assign({}, this.options);
        options.path += path;

        if (query !== null) {
            options.path += '?' + qs.stringify(query);
        }

        return request.call(options).then(response => request.format(response));
    };
};

/**
 * Api method export
 */
module.exports = API;