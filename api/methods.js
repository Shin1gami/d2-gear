const api = require('./api');

/**
 * Available api methods
 */
module.exports = {
    /**
     * Find bungie user by platform tag
     * @param {String} name
     * @return {Promise}
     * @constructor
     */
    D2Find: function (name) {
        return (new api).call('User/SearchUsers/', {q: name});
    },

    /**
     * Returns manifest data about game content
     * @return {Promise}
     * @constructor
     */
    D2Manifest: function () {
        return (new api).call('Destiny2/Manifest/');
    },

    /**
     * Find destiny player by platform and exact name
     * @param {Number} platform
     * @param {String} name
     * @return {Promise}
     * @constructor
     */
    D2Membership: function (platform, name) {
        return (new api).call(`Destiny2/SearchDestinyPlayer/${platform}/${encodeURIComponent(name)}/`);
    },

    /**
     * Get destiny player profile
     * @param {Number} platform
     * @param {Number} id
     * @param {String} components
     * @return {Promise}
     * @constructor
     */
    D2Profile: function (platform, id, components) {
        return (new api).call(`Destiny2/${platform}/Profile/${id}/`, {components: components});
    },

    /**
     *
     * @param {Number} platform
     * @param {Number} id
     * @param {Number} char
     * @param {String} components
     * @return {Promise}
     * @constructor
     */
    D2Character: function (platform, id, char, components) {
        return (new api).call(`Destiny2/${platform}/Profile/${id}/Character/${char}/`, {components: components});
    }
};