module.exports = {
  name: "owner",
  description: "Show bot owner information",

  run({ reply, config }) {
    reply(
`╭──『 BOT OWNER 』
│ 👤 Owner : ${config.owner}
│ 🤖 Bot   : ${config.botName}
│ 🔰 Prefix: ${config.prefix}
╰────────────────`
    );
  }
};
