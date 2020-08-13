const shortid = require('shortid');
const db = require('../db');

module.exports.home = (req, res) => {
	res.render('users/index', {
		users: db.get('users').value()
	})
}

module.exports.search = (req, res) => {
	const q = req.query.q.toLowerCase();
	const matchUser = db.get('users').value().filter(user => user.name.toLowerCase().indexOf(q) !== -1)
	res.render('users/index', {
		users: matchUser
	})
}

module.exports.create = (req, res) => {
	res.render('users/create')
}
module.exports.view = (req, res) => {
	const id = req.params.id;
	const user = db.get('users').find({id: id}).value();
	res.render('users/view', {
		user: user
	})
}

module.exports.postCreate = (req, res) => {
	req.body.id = shortid.generate();
	db.get('users').push(req.body).write();
	res.redirect('/users');
}