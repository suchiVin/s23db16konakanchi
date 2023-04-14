var peacock = require('../models/peacock');
// List of all peacock
exports.peacock_list = function(req, res) {
res.send('NOT IMPLEMENTED: peacock list');
};
// for a specific peacock.
exports.peacock_detail = function(req, res) {
res.send('NOT IMPLEMENTED: peacock detail: ' + req.params.id);
};
// Handle peacock create on POST.
exports.peacock_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: peacock create POST');
};
// Handle peacock delete form on DELETE.
exports.peacock_delete = function(req, res) {
res.send('NOT IMPLEMENTED: peacock delete DELETE ' + req.params.id);
};
// Handle peacock update form on PUT.
exports.peacock_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: peacock update PUT' + req.params.id);
};