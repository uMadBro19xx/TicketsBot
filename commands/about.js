/*
  LuckyTicket About Us
 */

// Import response
const response = require('./../strings.json').commands.about.responses.default;
module.exports = msg => msg.channel.send(response);
