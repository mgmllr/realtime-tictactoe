
/*
 * Routes
 */

module.exports.create = function (app) {
	
	app.get('/', function (req, res, next) {
		res.render('index', {
			title: 'TicTacToe Board'
		});
	});
}
