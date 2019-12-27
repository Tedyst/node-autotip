const dotenv = require('dotenv');
const fs = require('fs');

if (fs.existsSync('.env')) {
  dotenv.config();
}

const defaults = {
  NODE_ENV: 'development',
  TIP_KARMA: 500, // Amount of karma gained for tipping a player, depends on player rank
  PRINT_REWARDS: true, // Whether tip rewards like coins and xp should be logged
  HIDE_TIP_MESSAGES: true, // Hide chat spam from tipping
  HIDE_JOIN_MESSAGES: true, // Hide player join messages
  HYPIXEL_API_KEY: '',
  UUID: '1c57e151112f4da4a229ade98a4f0c0b'
};

// ensure that process.env has all values in defaults, but prefer the process.env value
Object.keys(defaults).forEach((key) => {
  process.env[key] = (key in process.env) ? process.env[key] : defaults[key];
});
// now processes can use either process.env or config
module.exports = process.env;
