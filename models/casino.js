const mongoose = require('mongoose');
const casinoSchema = new mongoose.Schema({
    "id":String,
    "name": String,
    "location": String
})
  const casino = mongoose.model('casino', casinoSchema);
  module.exports = casino