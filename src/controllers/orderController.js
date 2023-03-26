const {Op} = require('sequelize');
const initModels = require('../models/init-models');
const sequelize = require('../models/index');
const sub_food = require('../models/sub_food');
const model = initModels(sequelize);

const createOrder = async (req, res) => {
    try {
        const { user_id, food_id, amount, arr_sub_id} = req.body;

        let orderModel = {
            user_id,
            food_id,
            amount,
            arr_sub_id
        }

        let data = await model.order.create(orderModel);
        console.log(data);

        res.status(200).send(data);
        console.log('Order has been created');
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
}

module.exports = {createOrder}