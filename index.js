const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
const users = [
	{ id: 1, name: "Quang"},
	{ id: 2, name: "Nhat"}
]
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index', {
		name: "Nhat"
	})
});
app.get('/users', (req, res) => {
	res.render('users/index', {
		users: users
	})
});

app.get('/users/search', (req, res) => {
	const q = req.query.q.toLowerCase();
	const matchUser = users.filter(user => user.name.toLowerCase().indexOf(q) !== -1)
	res.render('users/index', {
		users: matchUser
	})
});

app.get('/users/create', (req, res) => {
	res.render('users/create')
});

app.post('/users/create', (req, res) => {
	users.push(req.body);
	res.redirect('/users');
})

app.listen(port, () => console.log(`I am listening on ${port}`))