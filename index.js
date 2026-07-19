const config = require("./config.json");
const Main = require("./Main");

console.clear();

console.log("================================");
console.log(`🤖 ${config.botName}`);
console.log(`👤 Owner : ${config.owner}`);
console.log(`🔰 Prefix: ${config.prefix}`);
console.log("================================");

const bot = new Main(config);
bot.start();
