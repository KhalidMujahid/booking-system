const { Schema, model } = require("mongoose");

const defaultUses = {
  type: String,
  required: true,
};

const CustomerSchema = new Schema(
  {
    fname: {
      ...defaultUses,
    },
    lname: {
      ...defaultUses,
    },
    phone_number: {
      type: Number,
      required: true,
    },
    address: {
      ...defaultUses,
    },
    next_of_kin_name: {
      ...defaultUses,
    },
    next_of_kin_phone_number: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Customer = model("Customer", CustomerSchema);
module.exports = Customer;
