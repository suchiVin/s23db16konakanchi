var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var peacock_controller = require('../controllers/peacock');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// peacock ROUTES ///
// POST request for creating a peacock.
router.post('/peacock', peacock_controller.peacock_create_post);
// DELETE request to delete peacock.
router.delete('/peacock/:id', peacock_controller.peacock_delete);
// PUT request to update peacock.
router.put('/peacock/:id', peacock_controller.peacock_update_put);
// GET request for one peacock.
router.get('/peacock/:id', peacock_controller.peacock_detail);
// GET request for list of all peacock items.
router.get('/peacock', peacock_controller.peacock_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"peacock", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};