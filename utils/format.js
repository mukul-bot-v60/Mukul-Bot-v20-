module.exports = {
  uptime(ms) {
    let s = Math.floor(ms / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    return `${h}h ${m % 60}m ${s % 60}s`;
  }
};
