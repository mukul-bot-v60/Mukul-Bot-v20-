const fs = require("fs");
const path = require("path");

module.exports = function loadCommands() {
  const commands = new Map();

  const files = fs.readdirSync(__dirname)
    .filter(file => file.endsWith(".js") && file !== "loader.js");

  for (const file of files) {
    const command = require(path.join(__dirname, file));
    commands.set(command.name, command);
  }

  return commands;
};
