const header = document.getElementById("header");
const content = document.getElementById("content");

function joke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((response) => response.json())
    .then((data) => {
      const valur = data.data.content;
      // console.log(valur);
      header.textContent = valur.text_head;
      content.textContent =
        data.data.content.text !== "" ? valur.text : valur.text_hidden;
    });
}
joke();
// document.body.addEventListener("click", () => {
//  // e.preventDefault();
//   joke();
//   console.log("tes");
// });
setInterval(joke, 10000);
