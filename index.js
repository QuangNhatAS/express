const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ users: []})
  .write()

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index', {
		name: "Nhat"
	})
});
app.get('/users', (req, res) => {
	res.render('users/index', {
		users: db.get('users').value()
	})
});

app.get('/users/search', (req, res) => {
	const q = req.query.q.toLowerCase();
	const matchUser = db.get('users').value().filter(user => user.name.toLowerCase().indexOf(q) !== -1)
	res.render('users/index', {
		users: matchUser
	})
});

app.get('/users/create', (req, res) => {
	res.render('users/create')
});

app.post('/users/create', (req, res) => {
	db.get('users').push(req.body).write();
	res.redirect('/users');
})

app.listen(port, () => console.log(`I am listening on ${port}`))