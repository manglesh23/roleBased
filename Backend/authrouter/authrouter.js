const express= require('express');
const { createUser, home, login } = require('../controller/user');
const { createGroup } = require('../controller/group');
const { checkrole } = require('../middleware/checkrole');
const { verify } = require('../middleware/vefiyToken');


const router= express.Router();
router.route('/').get(home);
router.route('/login').get(login);
router.route('/createUser').post(createUser);
router.route('/createGroup').post(verify,checkrole,createGroup);


module.exports={router};