const fs = require("fs");
const path = require("path");

const config = require("./config.json");
const Main = require("./Main");

console.clear();

console.log("================================");
console.log(`🤖 ${config.DAZAR-BOT}`);
console.log(`👤 Owner : ${config.SM-MUKUL-BOSS}`);
console.log(`🔰 Prefix: ${config..}`);
console.log("================================");

const bot = new Main(config);

bot.start();
