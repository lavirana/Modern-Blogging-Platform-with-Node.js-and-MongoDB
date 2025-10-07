const path = require("path");
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { checkForAuthenticationCookie } = require('./middlewares/authentication');


const userRoute = require('./routes/user');
const blogRoute = require('./routes/article');
const Blog = require('./models/article');
const app = express();

const PORT = 8021;

mongoose.connect('mongodb://localhost:27017/weblog').then(e => console.log("MongoDB connected")).catch(err => console.log(err));


app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({extended: false}));
app.use(express.json()); // <-- add this line
app.use(cookieParser());
app.use(checkForAuthenticationCookie('token'));
app.use(express.static(path.resolve('./public')));

app.get('/', async (req, res) => {
    const allBlogs = await Blog.find({});
    res.render('home', {
        user: req.user,
        blogs: allBlogs,
    });
});

app.use('/user', userRoute);
app.use('/blog', blogRoute);

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));