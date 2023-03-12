let params = new URLSearchParams(document.location.search);
let idMeal = params.get("mId");
let img = document.getElementById("detailsImg");
let ourMeal = [];
let httpRequest = new XMLHttpRequest();
httpRequest.open(
    "GET", `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
httpRequest.send();
httpRequest.addEventListener("readystatechange", function() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        ourMeal = JSON.parse(httpRequest.response).meals;
        // console.log(ourMeal);
        displayMeals();
    }
});

function displayMeals() {
    let oneMeal = ``;
    for (let i = 0; i < ourMeal.length; i++) {
        oneMeal += `
        <div class=col-lg-6>
        <img src="${ourMeal[i].strMealThumb}" id="detailsImg" alt="" class="img-style">
        </div>
        <div class="col-lg-6">
        <h1 id="strMeal">${ourMeal[i].strMeal}</h1>
        <h5 id="strCategory">${ourMeal[i].strCategory}</h5>
        <h5 id="strArea">${ourMeal[i].strArea}</h5>
        <p id="strInstructions">${ourMeal[i].strInstructions}</p>
        </div>
        `;
        document.getElementById("Meals").innerHTML = oneMeal;



    }
}