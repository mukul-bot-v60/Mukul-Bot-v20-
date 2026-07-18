
module.exports.config = {
  name: "ping",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mukul",
  description: "Check bot response",
  commandCategory: "System",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
  return api.sendMessage(
    "🏓 Pong!",
    event.threadID,
    event.messageID
  );
};
