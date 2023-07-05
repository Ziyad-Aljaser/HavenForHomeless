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
    const url = "mongodb+srv://admin:wjkbalOqwmVnC0ou@cards.nspddif.mongodb.net/Cards?retryWrites=true&w=majority";
    const client = new MongoClient(url);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Call the function with the needed parameter
        const cards = await listTable(client);
        res.json(cards);
    } catch (e) {
        console.error(e);
        res.status(500).send('Error connecting to database');
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
