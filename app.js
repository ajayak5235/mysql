const path = require('path');

const express = require('express');
const bodyParser = require('body-parser')

const db = require('./util/database')

const app  = express();

const adminRoutes = require('./router/admin')
const shopRoutes = require('./router/shop');
//const router = require('./router/admin');
db.execute('SELECT*FROM products');

app.use(bodyParser.urlencoded({extended:false}))


app.use(adminRoutes);
app.use(shopRoutes)

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
});


 

 app.listen(4500)

