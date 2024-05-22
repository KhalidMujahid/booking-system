const Joi = require("joi");

// booking validation
const bookingValidation = Joi.object().keys({
  // driver
  name: Joi.string().required().min(1),
  phone_number: Joi.number().required(),
  address: Joi.string().required(),

  // car
  model: Joi.string().required(),
  plate_number: Joi.string().required(),
  no_of_seats: Joi.number().required(),

  //booking
  from: Joi.string().required(),
  to: Joi.string().required(),
  price: Joi.number().required(),
});

const customerBooking = Joi.object().keys({
  car_id: Joi.string().required(),
  fname: Joi.string().required(),
  lname: Joi.string().required(),
  phone_number: Joi.number().required(),
  address: Joi.string().required(),
  next_of_kin_name: Joi.string().required(),
  next_of_kin_phone_number: Joi.number().required(),
});

module.exports = {
  bookingValidation,
  customerBooking,
};
