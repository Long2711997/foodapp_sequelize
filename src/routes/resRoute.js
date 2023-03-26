const express = require('express');
const resRouter = express.Router();
const {likeRes, unLikeRes, getLikeByRes, getLikeByUser, rateRes, getRateByRes, getRateByUser} = require('../controllers/resController')

resRouter.post('/like-res', likeRes);

resRouter.delete('/unlike-res/:user_id/:res_id', unLikeRes)

resRouter.get('/get-like-by-res/:res_id', getLikeByRes)

resRouter.get('/get-like-by-user/:user_id', getLikeByUser)

resRouter.post('/rate-res', rateRes)

resRouter.get('/get-rate-by-res/:res_id', getRateByRes)

resRouter.get('/get-rate-by-user/:user_id', getRateByUser)

module.exports = resRouter;