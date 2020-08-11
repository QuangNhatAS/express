const express = require('express');
const app = express();
const port = 3000;

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
})

app.listen(port, () => console.log(`I am listening on ${port}`))