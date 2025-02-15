let idUser = null;
// ========================
// XMLHttpRequest
// ========================
function reqListener() {
  //   console.log(this.responseText);
}
let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

// ========================
// FETCH
// ========================
// fetch("mon lien ou url", "oject d'option")
//   .then((response) => {
//     // console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// -------------- recher un fichier texte
fetch("data.txt")
  .then((resp) => resp.text())
  .then((tes) => {
    // console.log(tes);
  });

// -------------- rechercher un fichier json
fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    // console.log(json);
  });

// -------------- rechercher un fichier avec object
const myHeaders = new Headers();

const init = {
  method: "GET",
  Headers: myHeaders,
  mode: "cors",
  cache: "default",
};
// exemple
// fetch("data.json", init).then((resp) => console.log(resp));

// =========================================================
// CRUD => Create (POST), Read (GET), Update (PUT) et Delete(DELETE)
// =========================================================
//  pour verifier si npm est  installé: npm -v
// //pour creer un package .json il  faut faire : npm init -y
// // pour installer : npm i -g json-server
// // pour demarer le server:json-server --w db.json ou json-server --port 3000 db.json
// =================================================
// ================== METHODE: POST
// ========= tabele post
const init2 = {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "Balé vicky",
    massage: "Je suis contente de toi ",
  }),
  mode: "cors",
  crdentials: "same-origin",
};
// ========= tabele user
const init2Users = {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "Bale victorien",
    age: 27,
  }),
  mode: "cors",
  crdentials: "same-origin",
};
// ========================= ENVOYER LES DONNES AU SERVER AVEC LA METHODE POST
// ========table post
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("http://localhost:3000/post", init2).then((resp) => {
    console.log(resp);
  });
});
// ========table users
user.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("http://localhost:3000/users", init2Users).then((resp) => {
    console.log(resp);
  });
});

// ========================== LIRE DES DONNEES AVEC LA METHODE GET
const displayData = () => {
  fetch("db.json", init)
    .then((res) => res.json())
    .then((dat) => {
      const array = dat.post;
      console.log(array);

      array.forEach((user) => {
        // console.log(user);
        idUser = user.id;
        console.log(user.id);
        console.log(user.pseudo);
        console.log(user.massage);
      });
    });
};
afficher.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("Afficher");
  displayData();
});

// ================== METHODE: DELETE>
const init3 = {
  method: "DELETE",
  headers: {
    "content-type": "application/json",
  },

  mode: "cors",
  crdentials: "same-origin",
};

supprimer.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(idUser);
  if (idUser !== null) {
    fetch("http://localhost:3000/post/" + idUser, init3).then((resp) => {
      // displayData();
      alert("id: " + idUser + " supprimé avec succès");
    });
  }
});

// ===============================
// ASYNCHRONE
//==============================
setTimeout(() => {
  // console.log("test");
}, 2000);

// -------------------- promise= promesse

fetch("monLien").then((resp) => {
  // console.log(resp);
});

// -------------------- async/await
async function fetchData() {
  await fetch("monLien");
  // attend que await soit axécuté avant de faire la suite
  excuteFonction();
}
// -------------------- async/await pour les fonction  flechée
const fetchDat2 = async () => {
  // attend que await soit axécuté avant de faire la suite
  excuteFonction();
};
