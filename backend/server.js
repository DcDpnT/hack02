const express = require("express");
// const cors = require("cors");


// const app = express();

// app.use(cors("*"));


const maladies = require("./maladies.json");
const medecins = require("./medecins.json")


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

// app.get("/api/all", getAll);

// app.get("/api/all/:id", (req, res) => {
//   const element = all.find((element) => element.id == req.params.id);
//   if (element) {
//     res.status(200).json(element);
//   } else {
//     res.status(404).json("There is no object with this id");
//   }
// });


// const getUsers = (req, res) => {
//   res.status(200).json(users);
// };

// app.get("/api/users", getUsers);

// app.get("/api/users/:pseudo", (req, res) => {
//   const element = users.find((element) => element.pseudo === req.params.pseudo);
//   if (element) {
//     res.status(200).json(element);
//   } else {
//     res.status(404).json("There is no user with this pseudo");
//   }
// });


// app.listen(port, (err) => {
//   if (err) {
//     console.error("Something bad happened");
//   } else {
//     console.log(`Server is listening on ${port}`);
//   }
// });


// //pour pouvoir ajouter de nouveaux utilisateurs
// app.use(express.json()); // Ajoutez cette ligne pour pouvoir lire les données JSON envoyées dans le corps de la requête

// app.post("/api/users", (req, res) => {
//   const newUser = req.body;
//   users.push(newUser);
//   res.status(201).json(newUser);
// });


// // Ajouter une commande à un utilisateur
// app.post("/api/users/:pseudo/commandes", (req, res) => {
//   const userPseudo = req.params.pseudo;
//   const newCommande = req.body;
//   const user = users.find(user => user.pseudo === userPseudo);
//   if (user) {
//     user.commandes.push(newCommande);
//     res.status(201).json(newCommande);
//   } else {
//     res.status(404).json({ message: `Aucun user avec le pseudo ${userPseudo}` });
//   }
// });

// //ajouter des éléments à favoris
// app.post("/api/users/:pseudo/favoris", (req, res) => {
//   const userPseudo = req.params.pseudo;
//   const newFavoris = req.body;
//   const newFavorisId = newFavoris.id;
//   const user = users.find(user => user.pseudo === userPseudo);
//   const favoriIndex=user.favoris.findIndex(favori => favori.id == newFavorisId);
//   if (user) {
//     if(favoriIndex == -1){
//     user.favoris.push(newFavoris);
//     res.status(201).json(newFavoris);
//     } else {
//       res.status(404).json({ message: "Ce favoris existe déjà !" });
//     }
//   } else {
//     res.status(404).json({ message: `Aucun user avec le pseudo ${userPseudo}` });
//   }
// });

// //supprimer des éléments à favoris
// app.delete("/api/users/:pseudo/favoris/:idCard", (req,res) => {
//   const userPseudo = req.params.pseudo;
//   const idFavorisToDelete = req.params.idCard;
//   const user = users.find(user => user.pseudo === userPseudo);
//   if (user) {
//     const favoriIndex = user.favoris.findIndex(favori => favori.id == idFavorisToDelete);
//     if(favoriIndex !== -1){
//       console.log("user.favoris",user.favoris);
//       console.log("user.favoris[0]",user.favoris[0]);
//       user.favoris.splice(favoriIndex,1);
//       res.status(204).end();
//     }else {
//       res.status(404).json({ message: `Aucun favoris d'id ${favoriIndex} pour l'utilisateur ${userPseudo}` });
//     }
    
//   } else {
//     res.status(404).json({ message: `Aucun user avec le pseudo ${userPseudo}` });
//   }
// })

module.exports={
    getMaladies,
    getMaladiesById,
    getMedecinById,
    getMedecins}