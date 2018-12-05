const express = require('express'),
        path = require('path'),
        bps = require('body-parser'),
        cors = require('cors')
        app = express();

const indexRouter = require('./api/routes/index');


app.use(bps.json());
app.use(bps.urlencoded({ extended : true}));
app.use(cors());

// app.use(express.static(path.join(__dirname, './public')));

app.use('/', indexRouter);

const PORT = 3000;

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server running....')
    }
})