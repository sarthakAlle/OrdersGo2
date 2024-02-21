const mongoose=require('mongoose');

const optionsSchema = new mongoose.Schema({
  // ... other fields
  options: { type: [String] }
});
const Options = mongoose.model('Options', optionsSchema);

module.exports = Options;
