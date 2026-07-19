module.exports = {
  name: "about",
  description: "Bot information",

  run({ config, reply }) {
    reply(
`🤖 ${config.botName}

Version: 1.0.0
Developer: ${config.owner}

Thank you for using this bot ❤️`
    );
  }
};
