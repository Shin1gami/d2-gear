const buckets = require('./gamedata/DestinyInventoryBucketDefinition');
const items = require('./gamedata/DestinyInventoryItemDefinition');
const sockets = require('./gamedata/DestinySocketTypeDefinition');
const socket_category = require('./gamedata/DestinySocketCategoryDefinition');
const perks = require('./gamedata/DestinySandboxPerkDefinition');

let data = {};

Object.entries(items).forEach(entry => {
    let [id, item] = entry;
    let tier = item.inventory.tierTypeHash;
    let bucket = item.inventory.bucketTypeHash;

    if ([4008398120, 2759499571].indexOf(tier) === -1) {
        return;
    }

    if ([3448274439, 3551918588, 14239492, 20886954, 1585787867].indexOf(bucket) === -1) {
        return;
    }

    if (item['sockets'] === undefined) {
        return;
    }

    if (data[bucket] === undefined) {
        data[bucket] = {};
    }

    item.sockets.socketEntries.forEach(socket => {
        if (sockets[socket.socketTypeHash] === undefined) {
            return;
        }

        socket.reusablePlugItems.forEach(plug => {
            let reference = items[plug.plugItemHash];
            let category = reference.plug.plugCategoryIdentifier;
            category = ['shader', 'ornament', 'intrinsics', 'mods', 'build_perk', 'ammo_perk'].indexOf(category) === -1 ? 'ornament' : category;

            if (data[bucket][category] === undefined) {
                data[bucket][category] = {};
            }

            data[bucket][category][reference.hash] = {
                name: reference.displayProperties.name,
                description: reference.displayProperties.description,
                icon: 'https://www.bungie.net' + reference.displayProperties.icon
            };
        });

        socket.randomizedPlugItems.forEach(plug => {
            let reference = items[plug.plugItemHash];
            let category = reference.plug.plugCategoryIdentifier;
            category = ['shader', 'ornament', 'intrinsics', 'mods', 'build_perk', 'ammo_perk'].indexOf(category) === -1 ? 'ornament' : category;

            if (data[bucket][category] === undefined) {
                data[bucket][category] = {};
            }

            data[bucket][category][reference.hash] = {
                name: reference.displayProperties.name,
                description: reference.displayProperties.description,
                icon: 'https://www.bungie.net' + reference.displayProperties.icon
            };
        });
    });
});

console.log(JSON.stringify(data));

/**
 * ARMOR BUCKETS:
 * 3448274439 - helmet
 * 3551918588 - gauntlet
 * 14239492 - chest armor
 * 20886954 - leg armor
 * 1585787867 - class armor
 *
 * ITEM TIERS:
 * 4008398120 - legendary
 * 2759499571 - exotic
 *
 * socketTypeHash -> DestinySocketTypeDefinition.plugWhitelist.categoryHash -> DestinyInventoryBucketDefinition
 * socketCategoryHash -> DestinySocketCategoryDefinition
 */