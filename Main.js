const fs = require("fs");
const path = require("path");

class Main {
  constructor(config) {
    this.config = config;
    this.commands = new Map();
  }

  loadCommands() {
    const commandsPath = path.join(__dirname, "Script");

    if (!fs.existsSync(commandsPath)) {
      console.log("⚠️ Script folder not found!");
      return;
    }

    const files = fs.readdirSync(commandsPath).filter(file =>
      file.endsWith(".js")
    );

    for (const file of files) {
      try {
        const command = require(path.join(commandsPath, file));

        if (command.name && command.run) {
          this.commands.set(command.name, command);
          console.log(`✅ Loaded: ${command.name}`);
        }
      } catch (err) {
        console.log(`❌ Failed to load ${file}`);
        console.error(err);
      }
    }
  }

  start() {
    console.log(`🚀 ${this.config.botName} Started`);
    this.loadCommands();
    console.log(`📦 Total Commands: ${this.commands.size}`);
  }
}

module.exports = Main;
