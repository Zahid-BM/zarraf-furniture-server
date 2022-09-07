const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb'); /* to connect DB */

// middleware
app.use(cors());

// connect app to mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ft3cxfj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// work with DB
async function run() {
    try {
        await client.connect();
        console.log('DB Connected via async function');
        const furnitureCollection = client.db("allFurniture").collection("furniture");

        // get all latest furniture from DB and send to client 
        app.get('/latestFurniture', async (req, res) => {
            const query = {};
            const cursor = furnitureCollection.find(query);
            const latestFurniture = await cursor.limit(12).toArray();
            res.send(latestFurniture);

        });

    }
    finally {

    }
}
run().catch(console.dir);

// default route
app.get('/', (req, res) => {
    res.send('Zarraf Furniture server is running...................')
});

// listening to the port that declared above 
app.listen(port, () => {
    console.log('The Server is running at port ', port);
});
