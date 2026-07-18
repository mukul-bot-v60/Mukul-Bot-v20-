const login = require("fca-unofficial");

module.exports = function(appState) {
  return new Promise((resolve, reject) => {
    login({ appState }, (err, api) => {
      if (err) return reject(err);

      api.setOptions({
        listenEvents: true,
        selfListen: false,
        forceLogin: true,
        autoMarkRead: true
      });

      resolve(api);
    });
  });
};
