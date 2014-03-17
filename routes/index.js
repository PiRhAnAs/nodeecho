
exports.index = function(req, res){
	res.redirect('/NodeJs rocks!');
};

exports.echo = function(req, res){
	var msg = req.params.msg.length > 50 ?
		"keep it short" : req.params.msg;
	res.render('index', { msg: msg});
};