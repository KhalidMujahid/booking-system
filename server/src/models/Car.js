const { Schema, model } = require("mongoose");

const CarSchema = new Schema(
  {
    model: {
      type: String,
      required: true,
    },
    plate_number: {
      type: String,
      required: true,
    },
    no_of_seats: {
      type: Number,
      required: true,
    },
    passengers: [
      {
        type: Schema.Types.ObjectId,
        ref: "Customer",
      },
    ],
  },
  { timestamps: true }
);

const Car = model("Car", CarSchema);

module.exports = Car;
