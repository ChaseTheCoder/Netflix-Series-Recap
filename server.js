const express = require('express');
const app = express();
app.set('view engine', 'ejs');

//----- Middleware

app.use(express.static(`${__dirname}/public`)); 
app.use(express.urlencoded({extended: false}));


//----- Routes

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
})




//----- 404 Route

app.get('*', (req, res) => {
    res.send("<h1>These are not the pages you're looking for</h1>")
});

//----- Server Listener

app.listen(4000, () => console.log("We're up and running on port 4000"));