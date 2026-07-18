module.exports = {
  name: "help",
  description: "Show all available commands",

  run({ commands, reply }) {
    let message = "📖 Available Commands:\n\n";

    commands.forEach(cmd => {
      message += `• ${cmd.name} - ${cmd.description}\n`;
    });

    reply(message);
  }
};
