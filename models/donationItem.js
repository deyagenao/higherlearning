var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DonationItemSchema = new Schema({
  itemDescription: {
    type: String,
    required: true,
    trim: true
  },
  itemQuantity: Number
})

var DonationItem = mongoose.model('DonationItem', DonationItemSchema);
module.exports = DonationItem;