const express = require("express");

const app = express();
const cors = require("cors");
app.use(cors("*"));

const port = 4242; 

const welcome = (req, res) => {
  res.send("Welcome to my Doctolibo");
};

const server = require("./server")

app.get("/", welcome);
app.get("/api/maladies", server.getMaladies);
app.get("/api/medecins", server.getMedecins);
app.get("/api/maladies/:id", server.getMaladiesById);
app.get("/api/medecins/:id", server.getMedecinById);
// app.get("/api/users", serverSQL.getUsers);
// app.get("/api/all", serverSQL.getDreams);
// app.get("/api/all/:id", serverSQL.getDreamsByID);
// app.get("/api/users/:id", serverSQL.getUsersByID);
// app.get("/api/users/:id/favoris", serverSQL.getUserFavoris);


app.listen(port, (err) => {
    if (err) {
      console.error("Something bad happened");
    } else {
      console.log(`Server is listening on ${port}`);
    }
  });