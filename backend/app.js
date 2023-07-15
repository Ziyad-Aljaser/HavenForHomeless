// To start the server:
// 1- cd backend
// 2- node app.js
// 3- The server starts on: http://localhost:3001/api/cards

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
const port = process.env.PORT || 3001;

async function listTable(client) {
    const databaseTable = await client.db().collection("Cards").find().toArray();
    return databaseTable;
}

app.get('/api/cards', async (req, res) => {
    const url = process.env.MONGODB_API;
    const client = new MongoClient(url);

    try {
        // Connect to the MongoDB
        await client.connect();

        // Call the function with the needed parameter
        const cards = await listTable(client);
        res.json(cards);
    } catch (e) {
        console.error(e);
        res.status(500).send('Error connecting to database');
    } finally {
        // Close the connection to the MongoDB
        await client.close();
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
