const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// default route
app.get('/', (req, res) => {
    res.send('Zarraf Furniture server is running...................')
});

app.listen(port, () => {
    console.log('The Server is running at port ', port);
})
