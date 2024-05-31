const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();

const port = process.env.PORT || 5000;
// middleware
const corsOptions = {
  origin: [
    'http://localhost:5180',
  ],
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vxqz6e2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const spotCollections = client.db('roamifyDB').collection('spotCollections');
    const countryCollection = client.db('roamifyDB').collection('countries');


    app.get('/mySpot/:email', async (req, res) => {
      console.log(req.params.email);
      const result = await spotCollections.find({ email: req.params.email }).toArray();
      res.send(result);
    })

    app.get('/touristSpot/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await spotCollections.findOne(query);
      res.send(result);
    })

    app.get('/touristSpot', async (req, res) => {
      const cursor = spotCollections.find();
      const spot = await cursor.toArray();
      res.send(spot);
    })

    app.post('/addTouristSpot', async (req, res) => {
      console.log(req.body);
      const result = await spotCollections.insertOne(req.body);
      console.log(result);
      res.send(result);
    })

    app.delete('/mySpot/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await spotCollections.deleteOne(query);
      res.send(result);
    })

    // for update
    app.get('/mySpot-data/:id', async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: new ObjectId(id) }
      const result = await spotCollections.findOne(query);
      res.send(result);
    })

    app.get('/singleProduct/:id', async (req, res) => {
      console.log(req.params.id);
      const result = await spotCollections.findOne({ _id: new ObjectId(req.params.id) });
      res.send(result);
    })

    app.put('/updateProduct/:id', async (req, res) => {
      console.log(req.params.id);
      const query = { _id: new ObjectId(req.params.id) };
      const data = {
        $set: {
          image: req.body.image,
          spotName: req.body.spotName,
          countryName: req.body.countryName,
          location: req.body.location,
          description: req.body.description,
          cost: req.body.cost,
          season: req.body.season,
          time: req.body.time,
          visitor: req.body.visitor,
        }
      }
      const result = await spotCollections.updateOne(query, data);
      console.log(result);
      res.send(result);

    })

    // countries collection
    app.get('/countryList', async (req, res) => {
      const cursor = countryCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


//user related api


app.get('/', (req, res) => {
  res.send('Data Server Running');
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

