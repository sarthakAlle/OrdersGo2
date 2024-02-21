// dataModel.js
const Options = require('./optionsModel');
const mongoose = require('mongoose');


const toolsSchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Tools = mongoose.model('Tools', toolsSchema);

module.exports = Tools;
