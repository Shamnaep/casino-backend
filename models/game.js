const mongoose = require('mongoose');
const thumbSchema = new mongoose.Schema({
    url: String
  });
  
const gameSchema = new mongoose.Schema({
    id: String,
    slug: String,
    title:String,
    providerName: String,
    startUrl: String, // Optional field
    thumb: thumbSchema
  });
  const Game = mongoose.model('movie', gameSchema);
  module.exports = Game