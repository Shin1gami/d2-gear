const def = require('../../gamedata/DestinyRaceDefinition');

module.exports = function StatFilter(id) {
    Object.keys(stats).forEach(id => {
        stats[id] = def[id]['displayProperties'];
    });

    return stats;
};