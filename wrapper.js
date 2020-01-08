const config = require('./config');
const request = require('sync-request');
const logger = require('./lib/logger');

function isOnline() {
    if (config.HYPIXEL_API_KEY != '') {
        var res = request('GET', 'https://api.hypixel.net/player?key=' + config.HYPIXEL_API_KEY + '&uuid=' + config.UUID)
        var importedJSON = JSON.parse(res.getBody());
        if (importedJSON.player === undefined) {
            logger.info("Could not get player information from hypixel.")
            // Assume the player is online, don't bother him.
            return true;
        }
        if (importedJSON.player.lastLogout < importedJSON.player.lastLogin) {
            logger.debug("Player is Online, not logging in.")
            return true;
        } else {
            logger.debug("Player is not Online, logging in.")
            return false;
        }
    }
    // Assume the player is online, don't bother him.
    return true;
}

function checkOnline() {
    if (isOnline()) {
        setTimeout(checkOnline, 10000);
    } else {
        const index = require('./index');
    }
}
// Give the player a full minute for him to log in...I guess thats enough
setTimeout(checkOnline, 60000);