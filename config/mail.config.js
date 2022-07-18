const { app } = require("../app");
const nodeoutlook = require("nodejs-nodemailer-outlook");
const { getObjectBycategory } = require("../queries/object.queries");
const { findUserPerId } = require("../queries/user.queries");

app.on("addObject", async (object) => {
  console.log("on vient dajouter un object", object);
  try {
    const ObjectCategories = await getObjectBycategory(object.Categorie); //on recupere tous les objets de la meme categorie
    const objetFilter = ObjectCategories.filter(
      (obj) => obj.statut !== object.statut
    ); //on recupere les objets qui ont un statut different de celui qui vient detre poster
    const matchPublication = []; //on cree un tableau qui va contenir les objets qui ont presques les memes carracterisques que l'objet qui vient d'etre poster et qui ont des satuts different de celui qui vient d'etre poster
    if (objetFilter.length > 0) {
      objetFilter.forEach((element) => {
        const {
          nomObjet,
          Lieu,
          Description,
          TypeDoc,
          Modele,
          Marque,
          DateNaissance,
          UserNom,
        } = element;
        const text1 =
          nomObjet +
          " " +
          Lieu +
          " " +
          Description +
          " " +
          TypeDoc +
          " " +
          Modele +
          " " +
          Marque +
          " " +
          DateNaissance +
          " " +
          UserNom +
          " "; //je veut utiliser ses element pour chercher avec
        const text2 =
          object.nomObjet +
          " " +
          object.Lieu +
          " " +
          object.Description +
          " " +
          object.TypeDoc +
          " " +
          object.Modele +
          " " +
          object.Marque +
          " " +
          object.DateNaissance +
          " " +
          object.UserNom +
          " "; //je veut utiliser ses element pour chercher avec
        const tab1 = text1.split(" "); //je transforme les element en tableau
        const tab2 = text2.split(" ");
        const tab3 = tab1.filter((el) => tab2.includes(el)); //je filtre le tableau pour ne garder que les element qui sont dans le tableau 2
        // console.log("tab1", tab1.length);
        // console.log("tab2", tab2.length);
        // console.log("tab3", tab3.length);
        if (tab3.length > tab1.length / 2 && tab3.length > tab2.length / 2) {
          matchPublication.push(element);
          //   console.log("un element trouver");
        }
      });
    }
    if (matchPublication.length > 0) {
      try {
        const user1 = await findUserPerId(object.idUtilisateur);
        if (object.statut === "trouver") {
          matchPublication.forEach(async (element) => {
            const user2 = await findUserPerId(element.idUtilisateur);
            nodeoutlook.sendEmail({
              auth: {
                user: "freelost237@outlook.be",
                pass: "@Lostfree237",
              },
              from: "freelost237@outlook.be",
              to: user1.email,
              subject:
                "Un correspondant trouver pour l'objet " +
                object.nomObjet +
                " " +
                object.TypeDoc +
                " " +
                object.Marque +
                " " +
                object.Modele,
              html: `<h1>Bonjour ${user1.username}</h1>
                     <p>Un potentiel proprietaire à ete trouver recement pour l'objet que vous 
                     avez poster sur la  plateForme FreeLost</p>
                     <br>
                     <p>Voici les informations laisser par le potentiel proprietaire </p>
                     <p>Nom de l'objet : ${
                       element.nomObjet +
                       " " +
                       element.TypeDoc +
                       " " +
                       element.Marque +
                       " " +
                       element.Modele
                     }</p>
                     <p>Lieu de perte  : ${element.Lieu}</p>
                     <p>Description de l'objet : ${element.Description}</p>
                     <p>Vous pouvez le contacter via le numero ${
                       user2.numero
                     }</p>
                     <p>Voici une image de sont object
                       <img src="https://freelost-api.kouelab.com/${
                         element.Photo
                       }" alt="image object"/> </p>
                     <br>
                       <p>Conseils de la communauter FreeLost</p>
                       <ul>
                       <li>Pour la restitution de l'object , toujours le faire dans les endroit public </li>
                       <li>Signaler directement a la communauter freelost losque vous etes menace </li>
                       <li>soyez prudent !, freeLost n'est en aucun cas responsable de tous cequi pourait
                        vous arrivez lors d'une rencontre avec un autre membre</li>
                       </ul>
                          <br>
                       <p>Cordialement FreeLost ©Copyright 2022,tout droit reserve .</p>`,
              replyTo: "",

              onError: (e) => console.log(e),
              onSuccess: (i) => console.log("Email envoyé"),
            });
            nodeoutlook.sendEmail({
              auth: {
                user: "freelost237@outlook.be",
                pass: "@Lostfree237",
              },
              from: "freelost237@outlook.be",
              to: user2.email,
              subject:
                "Votre objet a été trouver  " +
                object.nomObjet +
                " " +
                object.TypeDoc +
                " " +
                object.Marque +
                " " +
                object.Modele,
              html: `<h1>Bonjour ${user2.username}</h1>
                     <p>Un potentiel objet à ete trouvé recement pour l'objet que vous 
                     avez poster comme perdu sur la  plateForme freeLost</p>
                     <br>
                     <p>Voici les informations laisser par celui qui la  </p>
                     <p>Nom de l'objet : ${
                       object.nomObjet +
                       " " +
                       object.TypeDoc +
                       " " +
                       object.Marque +
                       " " +
                       object.Modele
                     }</p>
                     <p>Lieu ou il été retrouvé  : ${object.Lieu}</p>
                     <p>Description de l'objet : ${object.Description}</p>
                     <p>Vous pouvez le contacter via le numero ${
                       user1.numero
                     }</p>
                     <p>Voici une image de l'object
                       <img src="https://freelost-api.kouelab.com/${
                         object.Photo
                       }" alt="image object"/> </p>
                       <br>
                       <p>Conseil de la communauter FreeLost</p>
                       <ul>
                       <li>etre respectuer losque vous contacter la personne qui a retrouver votre objet</li>
                       <li>Pour la restitution de l'object veillez toujours le faire dans les endroit public</li>
                       <li>Signaler directement a la communauter freelost losque vous etes menace</li>
                      <li>soyez prudent !, freeLost n'est en aucun cas responsable de tous cequi pourait
                        vous arrivez lors d'une rencontre avec un autre membre</li>
                       </ul>
                          <br>
                       <p>Cordialement FreeLost ©Copyright 2022,tout droit reserve .</p>`,
              replyTo: "",

              onError: (e) => console.log(e),
              onSuccess: (i) => console.log("Email envoyé"),
            });
          });
        } else {
          matchPublication.forEach(async (element) => {
            const user2 = await findUserPerId(element.idUtilisateur);
            nodeoutlook.sendEmail({
              auth: {
                user: "freelost237@outlook.be",
                pass: "@Lostfree237",
              },
              from: "freelost237@outlook.be",
              to: user1.email,
              subject:
                "Votre objet a ete trouvé " +
                object.nomObjet +
                " " +
                object.TypeDoc +
                " " +
                object.Marque +
                " " +
                object.Modele,
              html: `<h1>Bonjour ${user1.username}</h1>
                     <p>Un potentiel objet à ete trouver recement pour l'objet que vous 
                     avez signalé comme perdu sur la  plateForme freeLost</p>
                     
                     <br>
                     <p>Voici les informations laisser par celui qui la retrouver </p>
                     <p>Nom de l'objet : ${
                       element.nomObjet +
                       " " +
                       element.TypeDoc +
                       " " +
                       element.Marque +
                       " " +
                       element.Modele
                     }</p>
                     <p>Lieu de trouve  : ${element.Lieu}</p>
                     <p>Description de l'objet : ${element.Description}</p>
                     <p>Vous pouvez le contacter via le numero ${
                       user2.numero
                     }</p>
                     <p>Voici une image de l'object
                       <img src="https://freelost-api.kouelab.com/${
                         element.Photo
                       }" alt="image object"/> </p>
                       <br>
                       <p>Conseil de la communauter FreeLost</p>
                       <ul>
                       <li>Pour la restitution de l'object veillez toujours le faire dans les endroit public</li>
                       <li>Signaler directement a la communauter freelost losque vous etes menace</li>
                       <li>soyez prudent !, freeLost n'est en aucun cas responsable de tous cequi pourait
                        vous arrivez lors d'une rencontre avec un autre membre</li>
                       </ul>
                          <br>
                       <p>Cordialement FreeLost ©Copyright 2022,tout droit reserve .</p>`,
              replyTo: "",

              onError: (e) => console.log(e),
              onSuccess: (i) => console.log("Email envoyé"),
            });
            nodeoutlook.sendEmail({
              auth: {
                user: "freelost237@outlook.be",
                pass: "@Lostfree237",
              },
              from: "freelost237@outlook.be",
              to: user2.email,
              subject:
                "Un potentiel proprietaire pour l'object que vous avez trouvé  " +
                object.nomObjet +
                " " +
                object.TypeDoc +
                " " +
                object.Marque +
                " " +
                object.Modele,
              html: `<h1>Bonjour ${user2.username}</h1>
                     <p></p>
                     <br>
                     <p>Un potentiel proprietaire à ete trouver recement pour l'objet que vous 
                     avez poster sur la  plateForme freeLost  </p>
                     <p>Nom de l'objet : ${
                       object.nomObjet +
                       " " +
                       object.TypeDoc +
                       " " +
                       object.Marque +
                       " " +
                       object.Modele
                     }</p>
                     <p>Lieu ou il l'a perdu  : ${object.Lieu}</p>
                     <p>Description de l'objet : ${object.Description}</p>
                     <p>Vous pouvez le contacter via le numero ${
                       user1.numero
                     }</p>
                     <p>Voici une image de l'object
                       <img src="https://freelost-api.kouelab.com/${
                         object.Photo
                       }" alt="image object"/> </p>
                       
                       <p>Conseil de la communauter FreeLost</p>
                       <ul>
                       <li>etre respectuer losque vous contacter la personne qui a retrouver votre objet</li>
                       <li>Pour la restitution de l'object veillez toujours le faire dans les endroit public</li>
                       <li>Signaler directement a la communauter freelost losque vous etes menace</li>
                      <li>soyez prudent !, freeLost n'est en aucun cas responsable de tous cequi pourait
                        vous arrivez lors d'une rencontre avec un autre membre</li>
                       </ul>
                          <br>
                       <p>Cordialement FreeLost ©Copyright 2022,tout droit reservé.</p>`,
              replyTo: "",

              onError: (e) => console.log(e),
              onSuccess: (i) => console.log("Email envoyé"),
            });
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  } catch (e) {
    console.log(e);
  }
});
