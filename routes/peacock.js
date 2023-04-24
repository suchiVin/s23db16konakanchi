var express = require('express');
const peacock_controlers = require('../controllers/peacock');
const peacock = require('../models/peacock');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET peacocks */
router.get('/', peacock_controlers.peacock_view_all_Page);
/* GET detail peacock page */
router.get('/detail', secured, peacock_controlers.peacock_view_one_Page);
/* GET create peacock page */
router.get('/create', secured, peacock_controlers.peacock_create_Page);
/* GET create update page */
router.get('/update', secured, peacock_controlers.peacock_update_Page);
/* GET delete peacock page */
router.get('/delete',secured, peacock_controlers.peacock_delete_Page);
module.exports = router;