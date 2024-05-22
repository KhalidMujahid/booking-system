const { Router } = require("express");

const paymentRouter = Router();

paymentRouter.get("/payment", (req, res) => res.status(200).send("Payment"));

module.exports = paymentRouter;
