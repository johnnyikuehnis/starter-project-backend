import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {db} from "./util/FirebaseInit.js";
import {collection, getDocs} from "firebase/firestore";
dotenv.config();

const app = express();
const port = 8080;

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000"
    })
);

app.get("/", async(req, res) => {
    res.send("Hello World");
});

app.get("/pokemon", async (req, res) => {
    //Get a reference to the collection "Pokemon"
   const collectionRef = collection(db, "Pokemon");
   //Get all documents from the collection
   const collectionSnap = await getDocs(collectionRef);
    //Make a list of those documents
   const docs = [];
   collectionSnap.forEach((doc) => {
    docs.push(doc.data());
   });
   //Return them
   res.send(docs)
});

app.post("/pokemon", (req, res) => {
    const newPokemon = req.body;
    console.log('Received new Pokémon:', newPokemon);

    res.status(201).json({
        message: 'New Pokémon added successfully!',
        pokemon: newPokemon
    });
});


// STARTS PROGRAM
app.listen(port, () => {
    console.log("Listening on port", port);
});