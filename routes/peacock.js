var express = require('express');
const peacock_controlers= require('../controllers/peacock');
var router = express.Router();

/* GET peacocks */
router.get('/', peacock_controlers.peacock_view_all_Page);
module.exports = router;