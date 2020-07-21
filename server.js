const express = require('express');
const app = express();
app.set('view engine', 'ejs');

//----- Middleware

app.use(express.urlencoded({extended: false}));


//----- Routes

app.get('/', (req, res) => {
    res.send(console.log('this is a landing page'))  
});




//----- 404 Route

app.get('*', (req, res) => {
    res.send("<h1>These are not the pages you're looking for</h1>")
});

//----- Server Listener

app.listen(4000, () => console.log("We're up and running on port 4000"));