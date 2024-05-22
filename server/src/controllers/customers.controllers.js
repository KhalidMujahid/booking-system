const Driver = require("../models/Driver");
const Car = require("../models/Car");
const { bookingValidation, customerBooking } = require("../utils/validations");
const Booking = require("../models/Booking");
const Customer = require("../models/Customer");

// login controller (admin)
module.exports.loginUser = async (req, res, next) => {
  try {
    return res.status(200).send("Cont");
  } catch (error) {
    next(error);
  }
};

//get edit booking 
module.exports.getEditBooking = async (req,res,next) => {
  try{
   
   const booking = await Booking.findById(req.params.id);
   
   if(!booking) return res.status(404).send("ID not found!");
   
   const results = await Booking.findById(req.params.id).select("from to")
    .populate("driver_id","name phone_number")
    .populate("car_id","no_of_seats");
    return res.status(200).send(results);
    
  } catch(error){
    next(error);
  }
}

//get all bookings
module.exports.getAllBookings = async(req,res,next) => {
 try{
   const bookings = await Booking.find().select("price from to");
   return res.status(200).send(bookings);
 } catch(error){
   next(error);
 }
}

//get all bookings details
module.exports.getAllBookingsDetails = async (req,res,next) => {
  try{
    
    const results = await Booking.find()
    .select("from to")
    .populate("driver_id","name phone_number")
    .populate("car_id","no_of_seats");
    return res.status(200).send(results);
  
  } catch(error){
    next(error);
  }
}

//get single booking details 
module.exports.getSingleBookingDetails = async (req,res,next) => {
  try{
    const results = await Booking.findById(req.params.id)
    .select("price from to")
    .populate("driver_id","name phone_number")
    .populate("car_id","no_of_seats");
    return res.status(200).send(results);
  
  } catch(err){
    next(err);
  }
}

// add booking(admin)
module.exports.addBooking = async (req, res, next) => {
  try {
    // validations
    const { error } = bookingValidation.validate(req.body);

    if (error) {
      return res.status(422).send(error.details[0].message);
    }

    // save driver's details
    const driver = await Driver.create({
      name: req.body.name,
      address: req.body.address,
      phone_number: req.body.phone_number,
    });

    if (!driver)
      return res.status(400).send("An error occured please try again later");

    // save car details
    const car = await Car.create({
      model: req.body.model,
      no_of_seats: req.body.no_of_seats,
      plate_number: req.body.plate_number,
    });

    if (!car)
      return res.status(400).send("An error occured please try again later");

    // booking
    const booking = await Booking.create({
      driver_id: driver._id,
      car_id: car._id,
      from: req.body.from,
      to: req.body.to,
      price: req.body.price,
    });

    if (!booking)
      return res.status(400).send("An error occured please try again later");

    return res.status(201).send("Book added");
  } catch (error) {
    next(error);
  }
};

// Customer booking
module.exports.customerBooking = async (req, res, next) => {
  try {
    const { error } = customerBooking.validate(req.body);

    if (error) {
      return res.status(422).send(error.details[0].message);
    }

    // find car by ID
    const findCar = await Car.findById(req.body.car_id);
    if (!findCar) return res.status(404).send("Details not found!");

    // save customers details
    const customer = await Customer.create({
      fname: req.body.fname,
      phone_number: req.body.phone_number,
      lname: req.body.lname,
      address: req.body.address,
      next_of_kin_name: req.body.next_of_kin_name,
      next_of_kin_phone_number: req.body.next_of_kin_phone_number,
    });

    // check if customer have booked before
    const check = await Car.findById(req.body.car_id);
    const validates = check.passengers.find(
      (id) => toString(id) === toString(customer._id)
    );
    if (validates)
      return res.status(400).send("You have already booked this before");

    //attach customer to a car
    await findCar.updateOne({
      $push: {
        passengers: customer._id,
      },
    });

    const saveCar = await findCar.save();
    if (saveCar) {
      return res.status(200).send("Successfully");
    } else {
      return res.status(400).send("An error occured please try again later");
    }
  } catch (error) {
    next(error);
  }
};

// fetch all drivers
