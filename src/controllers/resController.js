const {Op} = require('sequelize');
const initModels = require('../models/init-models');
const sequelize = require('../models/index');
const like_res = require('../models/like_res');
const model = initModels(sequelize);

const likeRes = async (req, res) => {
    try {
        const {user_id, res_id} = req.body;

        let likeModel = {
            user_id,
            res_id,
        }

        let data = await model.like_res.create(likeModel);
        console.log(data);

        res.status(200).send(data)
        console.log('Res has been liked');
    } catch(err) {
        res.status(500).send(err)
        console.log(err);
    }
}

const unLikeRes = async (req, res) => {
    try {
        const { user_id, res_id } = req.params;

        await model.like_res.destroy({
            where: {user_id, res_id},
        });

        res.sendStatus(200);
        console.log("Res has been unliked");
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
}

const getLikeByRes = async (req, res) => {
    try {
        let {res_id} = req.params;

        let data = await model.like_res.findAll({
            where: {res_id}
        })

        res.status(200).send(data)
        console.log('Get list success');
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
}

const getLikeByUser = async (req, res) => {
    try {
        let {user_id} = req.params;

        let data = await model.like_res.findAll({
            where: {user_id}
        })

        res.status(200).send(data)
        console.log('Get list success');
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
}

const rateRes = async (req, res) => {
    try {
        const { user_id, res_id, amount } = req.body;

        let rateModel = {
            user_id,
            res_id,
            amount
        }

        let data = await model.rate_res.create(rateModel);
        console.log(data);

        res.status(200).send(data);
        console.log('Res has been rated');
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
}

const getRateByRes = async (req, res) => {
    try {
        let { res_id } = req.params;

        let data = await model.rate_res.findAll({
            where: { res_id }
        })

        res.status(200).send(data)
        console.log('Get list success');
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
}

const getRateByUser = async (req, res) => {
    try {
        let { user_id } = req.params;

        let data = await model.rate_res.findAll({
            where: { user_id }
        })

        res.status(200).send(data)
        console.log('Get list success');
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
}

module.exports = {likeRes, unLikeRes, getLikeByRes, getLikeByUser, rateRes, getRateByRes, getRateByUser}