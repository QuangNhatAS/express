require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const authMiddleware = require('./middlewares/auth.middleware');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
app.use(cookieParser(process.env.SESSION_SECRECT));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index', {
		name: "Nhat"
	})
});

app.use('/users',authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);

app.listen(port, () => console.log(`I am listening on ${port}`))