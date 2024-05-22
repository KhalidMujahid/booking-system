const { Schema, model } = require("mongoose");

const DriverSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Driver = model("Driver", DriverSchema);

module.exports = Driver;
