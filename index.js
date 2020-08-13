const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user.route');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index', {
		name: "Nhat"
	})
});

app.use('/users', userRoute);

app.listen(port, () => console.log(`I am listening on ${port}`))