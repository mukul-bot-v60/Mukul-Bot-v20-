const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m"
};

function time() {
  return new Date().toLocaleTimeString("en-US", {
    hour12: false
  });
}

module.exports = {
  info(message) {
    console.log(
      `${colors.cyan}[${time()}]${colors.reset} ${colors.green}[INFO]${colors.reset} ${message}`
    );
  },

  warn(message) {
    console.log(
      `${colors.cyan}[${time()}]${colors.reset} ${colors.yellow}[WARN]${colors.reset} ${message}`
    );
  },

  error(message) {
    console.log(
      `${colors.cyan}[${time()}]${colors.reset} ${colors.red}[ERROR]${colors.reset} ${message}`
    );
  },

  success(message) {
    console.log(
      `${colors.cyan}[${time()}]${colors.reset} ${colors.blue}[SUCCESS]${colors.reset} ${message}`
    );
  }
};
