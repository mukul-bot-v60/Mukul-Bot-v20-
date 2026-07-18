module.exports = {
  name: "about",
  description: "Bot information",

  run({ config, reply }) {
    reply(
`🤖 ${config.DANZAR BOT}

Version: 1.0.0
Developer: ${config.SM-MUKUL-BOSS}

Thank you for using this bot ❤️`
    );
  }
};
