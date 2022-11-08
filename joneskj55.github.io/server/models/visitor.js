const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitorSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  {
    collection: "visitors",
  }
);
module.exports = mongoose.model("Visitor", VisitorSchema);
