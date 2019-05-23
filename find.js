const fs = require('fs');

const id = process.argv[2];

fs.readdir('./gamedata/', (err, list) => {
    list.forEach(file => {
        const def = require('./gamedata/' + file);

        if (def[id] !== undefined) {
            console.log(file, JSON.stringify(def[id]));
        }
    });
});