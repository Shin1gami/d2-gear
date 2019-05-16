const api = require('./api');

module.exports = {
    D2Find: function(name) {
        return (new api).call('User/SearchUsers/', {q: name});
    },

    D2Membership: function (platform, name) {
        return (new api).call(`Destiny2/SearchDestinyPlayer/${platform}/${encodeURIComponent(name)}/`);
    },

    D2Profile: function (platform, id) {
        return (new api).call(`Destiny2/${platform}/Profile/${id}/`, {components: '100,200'});
    }
};