
/*
 * Routes
 */

module.exports.create = function (app, io) {
	
	app.get('/', function (req, res, next) {
		res.render('index', {
			title: 'TicTacToe Board'
		});
	});
}
