const express = require('express');
const orderRouter = express.Router();
const {createOrder} = require('../controllers/orderController');

orderRouter.post('/create-order', createOrder);

module.exports = orderRouter;