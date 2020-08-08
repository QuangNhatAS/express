const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=> {
	res.send('<h2>Hello</h2>');
});

app.get('/users', (req ,res) =>{
	res.send("users")
})

app.listen(port, () => console.log(`I'm listening on port ${port}`));

