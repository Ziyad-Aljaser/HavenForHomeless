const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb+srv://admin:wjkbalOqwmVnC0ou@cards.nspddif.mongodb.net/Cards?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // await listDatabases(client);

        // await findOneListingByName(client, "Shelter Service");

        await listTable(client);

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}


main().catch(console.error);

// Used to list all the tables/databases on MongoDB
async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    
}

// Used to find a specific row on a table/database by the key 
async function findOneListingByName(client, nameOfListing) {
    const result = await client.db("Cards").collection("Cards").findOne({ title: nameOfListing });

    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }

}

// Use to list all the data on a specific table/database
async function listTable(client) {
    const databaseTable = await client.db().collection("Cards").find().toArray();

    console.log("\nDatabases Table:");
    databaseTable.forEach(card => {
        console.log('\n', ` - ${JSON.stringify(card)}`);
        console.log('\n', '-'.repeat(50)); // prints a line of dashes
    });
}
