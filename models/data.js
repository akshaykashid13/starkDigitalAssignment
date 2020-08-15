const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const DataSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  findname: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  lon: {
    type: String,
    required: true
  },
  lat: {
    type: String,
    required: true
  }
});
module.exports = Data = mongoose.model("Data", DataSchema);