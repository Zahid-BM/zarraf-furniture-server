const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

// default route
app.get('/', (req, res) => {
    res.send('Zarraf Furniture server is running...................')
});

app.listen(port, () => {
    console.log('The Server is running at port ', port);
})
