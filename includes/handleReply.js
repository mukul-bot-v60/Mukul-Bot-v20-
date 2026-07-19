module.exports = async function(api, event, Reply) {
  if (!Reply || !Array.isArray(Reply)) return;

  const replyData = Reply.find(
    item => item.messageID === event.messageReply?.messageID
  );

  if (!replyData) return;

  try {
    if (typeof replyData.callback === "function") {
      await replyData.callback({
        api,
        event,
        data: replyData
      });
    }
  } catch (err) {
    console.error(err);
    api.sendMessage(
      "❌ Reply handle করতে সমস্যা হয়েছে।",
      event.threadID,
      event.messageID
    );
  }
};
