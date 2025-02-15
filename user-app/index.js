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
  document.body.innerHTML = userData
    .map(
      (user) =>
        `
      <div class="card">
      <img src=${user.picture.large} alt="photo de ${user.name.first}">
      <h3> ${user.name.first} </h3>
      </div>
    `
    )
    .join("");
};
userDisplay();
