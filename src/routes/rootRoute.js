const express = require('express');
const rootRouter = express.Router();

const resRouter = require('./resRoute');
const orderRouter = require('./orderRoute')

rootRouter.use('/res', resRouter);
rootRouter.use('/order', orderRouter)

module.exports = rootRouter;