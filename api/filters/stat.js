const def = require('../../gamedata/DestinyStatDefinition');

module.exports = function StatFilter(stats) {
    Object.keys(stats).forEach(id => {
        stats[id] = def[id]['displayProperties'];
    });

    return stats;
};