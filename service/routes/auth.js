/*
 用户认证
 */
let express = require('express');
let router = express.Router();

router.route('/')
    .get(function (req, res, next) {
        let currentUser = req.session.userInfo;
        if (currentUser && currentUser._id && currentUser.username) {
            res.send({
                isAuth: true
            });
        } else {
            res.send({
                isAuth: false
            });
        }
    });

module.exports = router;