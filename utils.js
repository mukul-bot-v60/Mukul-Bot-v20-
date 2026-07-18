const fs = require("fs");

module.exports = {
  log: (msg) => {
    console.log(`[BOT] ${msg}`);
  },

  delay: (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  readJSON: (path) => {
    return JSON.parse(fs.readFileSync(path, "utf8"));
  },

  writeJSON: (path, data) => {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  },

  random: (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
