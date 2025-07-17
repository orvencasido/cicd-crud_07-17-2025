const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://mongo:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Item = mongoose.model('Item', { name: String });

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const items = await Item.find();
    res.render('index', { items });
});

app.post('/add', async (req, res) => {
    const newItem = new Item({ name: req.body.name });
    await newItem.save();
    res.redirect('/');
});

app.listen(3000, () => console.log('App running on port 3000'));

