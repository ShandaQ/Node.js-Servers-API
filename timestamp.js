var moment = require('moment');

module.exports = function timestamp(message) {
  console.log(moment().format('mm:ss:SS'), message);
}
