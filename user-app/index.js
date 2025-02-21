let userData = [];
const fechtUser = async () => {
  await fetch("https://randomuser.me/api/?results=54")
    .then((resp) => resp.json())
    .then((data) => {
      userData = data.results;
    });

  //   setTimeout(() => {
  console.log(userData);
  //   userData.forEach((user) => {

  //     // console.log(usersName.title, usersName.last, usersName.first);
  //   });
  //}, 2000);
};

const userDisplay = async () => {
  await fechtUser();
  //========== une fonction:dateParser
  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };
  //==========FIN une fonction
  //==========La fonction:daycalc
  const dayCalc = (date) => {
    let today = new Date();
    let todayTimestamp = Date.parse(today); // nbre de miliseconde ecoulé puis 1970
    let timestamp = Date.parse(date); // nbre de miliseconde ecoulé puis la date d'enregistrement
    return Math.ceil((todayTimestamp - timestamp) / 8.64e7);
  };
  //==========FIN la fonction

  document.body.innerHTML = userData
    .map(
      (user) =>
        `
      <div class="card">
      <img src=${user.picture.large} alt="photo de ${user.name.first}">
      <h3> ${user.name.first} ${user.name.last} </h3>
       
      <p>Localisation:${user.location.city} </p>  
      <p>Date naissansce:  ${dateParser(user.dob.date)} </p>
      <em> Membre depuis : ${dayCalc(user.registered.date)} jours</em>
      
      </div>
    `
    )
    .join("");
};
userDisplay();
// arreter à 1h38;12
