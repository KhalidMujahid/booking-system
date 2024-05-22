const { Schema, model } = require("mongoose");

const BookingSchema = new Schema(
  {
    driver_id: {
      type: Schema.Types.ObjectId,
      ref: "Driver",
      required: true,
    },
    car_id: {
      type: Schema.Types.ObjectId,
      ref: "Car",
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Booking = model("Booking", BookingSchema);

module.exports = Booking;
