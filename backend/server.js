const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors("*"));
app.use(express.json()); 


const maladies = require("./maladies.json");
const medecins = require("./medecins.json");
const forum = require("./forum.json");


const getMaladies = (req, res) => {
  res.status(200).json(maladies);
};

const getMedecins = (req, res) => {
    res.status(200).json(medecins);
  };


const getMaladiesById = (req,res) => {
    const maladie = maladies.find((element) => element.id == req.params.id);
    if (maladie) {
        res.status(200).json(maladie);
      } else {
        res.status(404).json("There is no ill with this id");
      }
}

const getMedecinById = (req,res) => {
    const medecin = medecins.find((element) => element.id == req.params.id);
    if (medecin) {
        res.status(200).json(medecin);
      } else {
        res.status(404).json("There is no doctor with this id");
      }
}

const getForum = (req, res) => {
    res.status(200).json(forum);
  };

  const getForumById = (req,res) => {
    const forumTopic = forum.find((element) => element.id == req.params.id);
    if (forumTopic) {
        res.status(200).json(forumTopic);
      } else {
        res.status(404).json("There is no topic with this id");
      }
}


// app.use(express.json()); // Ajoutez cette ligne pour pouvoir lire les données JSON envoyées dans le corps de la requête


// //pour pouvoir ajouter de nouveaux topics aux forums
const postNewTopic = (req, res) => {
  const newTopic = req.body.topic;
  const newId = parseInt(forum.length,10) + 1;
  const newElement = {
    "id":newId,
    "topic":newTopic,
    "conversation":[]
  }
  forum.push(newElement);
  res.status(201).json(newElement);
};


const postNewCommentIntoTopic = (req, res) => {
    const newComment = req.body;
    const topicID = req.params.id;
    const topic = forum.find(element => element.id == topicID);

    if(topic) {
        topic.conversation.push(newComment);
        res.status(201).json(newComment);
    } else {
        res.status(404).json({ message: `Aucun topic avec l'id ${topicID}` });
    }
}


module.exports={
    getMaladies,
    getMaladiesById,
    getMedecinById,
    getMedecins,
    getForum,
    getForumById,
    postNewTopic,
    postNewCommentIntoTopic
}