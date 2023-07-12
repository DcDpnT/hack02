const express = require("express");

const app = express();
const cors = require("cors");
app.use(cors("*")); // cette ligne permet de communiquer avec le front
app.use(express.json());  // Cette ligne permet de lire les données JSON envoyées dans le corps de la requête

const port = 4242; 

const welcome = (req, res) => {
  res.send("Welcome to my Doctolibo");
};

const server = require("./server")

app.get("/", welcome);
app.get("/api/maladies", server.getMaladies);
app.get("/api/medecins", server.getMedecins);
app.get("/api/forum", server.getForum);
app.get("/api/maladies/:id", server.getMaladiesById);
app.get("/api/medecins/:id", server.getMedecinById);
app.get("/api/forum/:id", server.getForumById);
app.post("api/forum", server.postNewTopic);
app.post("/api/forum/:id/conversation", server.postNewCommentIntoTopic);


app.listen(port, (err) => {
    if (err) {
      console.error("Something bad happened");
    } else {
      console.log(`Server is listening on ${port}`);
    }
  });