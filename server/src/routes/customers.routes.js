const { Router } = require("express");
const {
  loginUser,
  addBooking,
  customerBooking,
  getAllBookings,
  getAllBookingsDetails,
  getSingleBookingDetails,
  getEditBooking
} = require("../controllers/customers.controllers");

const userRouter = Router();

userRouter.get("/", getAllBookings);

userRouter.get("/booking/details/",getAllBookingsDetails);

userRouter.get("/booking/details/:id",getSingleBookingDetails);

userRouter.get("/booking/edit/:id",getEditBooking);

userRouter.post("/login", loginUser);

userRouter.post("/add/booking", addBooking);

userRouter.post("/booking", customerBooking);

module.exports = userRouter;
