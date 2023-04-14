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

// List of all peacock
exports.peacock_list = async function(req, res) {
    try{
    thePeacock = await peacock.find();
    res.send(thePeacock);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.peacock_view_all_Page = async function(req, res) {
    try{
        thepeacocks = await peacock.find();
    res.render('peacock', { title: 'peacock Search Results', results: thepeacocks });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };