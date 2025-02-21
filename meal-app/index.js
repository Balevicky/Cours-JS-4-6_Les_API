const result = document.getElementById("result");
const form = document.querySelector("form");
const input = document.querySelector("input");
// console.log(input);

let meals = [];
// ============ fuonction
async function searchMeal(search) {
  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
    .then((resp) => resp.json())
    .then((data) => {
      meals = data.meals;
      console.log(meals);
    });
}
// =================fuonction
function mealDisplay() {
  if (meals === null) {
    result.innerHTML = `
       <h2>Aucun resultat trouvé</h2>
        `;
  } else {
    // on veut avoir au maxi 12 plats
    meals.length = 12;
    result.innerHTML = meals
      .map((meal) => {
        let ingredients = [];
        for (i = 1; i < 21; i++) {
          if (meal[`strIngredient${i}`]) {
            let ingredient = meal[`strIngredient${i}`];
            let mesure = meal[`strMeasure${i}`];
            //   console.log(ingredient + "-" + mesure);
            // ingredients.push(ingredient + "-" + mesure);
            ingredients.push(`<li> ${ingredient} - ${mesure} </li>`);
          }
        }
        // console.log(ingredients);

        return `
              <li class="card">
              <h2> ${meal.strMeal} </h2>
              <p> ${meal.strArea} </p>
              <img src=${meal.strMealThumb} alt="photo de ${meal.strMeal}">
              <ul> ${ingredients.join("")} </ul>
              </li>
              `;
      })
      .join("");
  }
}
// ================ evenement
input.addEventListener("input", (e) => {
  // console.log(e.target.value);
  searchMeal(e.target.value);
});
// ================ evenement
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   searchMeal().then(() =>
  mealDisplay();
});
