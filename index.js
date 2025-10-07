const path = require("path");
const express = require('express');
const mongoose = require('mongoose');

const userRoute = require('./routes/user');
const app = express();

const PORT = 8021;

mongoose.connect('mongodb://localhost:27017/weblog').then(e => console.log("MongoDB connected")).catch(err => console.log(err));


app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));

app.get('/', (req, res) => {
    res.render('home');
});
app.use(express.urlencoded({extended: false}));

app.use('/user', userRoute);

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));