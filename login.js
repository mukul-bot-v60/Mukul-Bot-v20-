const logger = require("../utils/logger");

class Login {
  constructor(config) {
    this.config = config;
  }

  async init() {
    logger.info("Initializing bot...");

    // এখানে আপনার বৈধ API বা Webhook সংযোগের কোড যোগ করতে পারেন।

    logger.success(`${this.config.botName} is ready!`);
  }
}

module.exports = Login;
