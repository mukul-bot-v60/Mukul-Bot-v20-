const logger = require("../utils/logger");

class Login {
  constructor(config) {
    this.config = config;
  }

  async init() {
    logger.info("Initializing bot...");
    logger.success(`${this.config.botName} is ready!`);
  }
}

module.exports = Login;
