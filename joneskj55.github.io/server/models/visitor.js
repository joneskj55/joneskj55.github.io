const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const VisitorSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  {
    collection: "visitors",
  }
);

VisitorSchema.virtual("date_formatted").get(function () {
  return DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model("Visitor", VisitorSchema);
