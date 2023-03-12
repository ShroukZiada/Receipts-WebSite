//Get Data
let ourMeal = [];
let myCategory = "Beef";
let allLinks = document.querySelectorAll(".nav-link")






for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener("click", (e) => {
        myCategory = e.target.text;
        getData()

    })
}


// XMLHttpRequest Statement...
getData()

function getData() {
    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", `https://www.themealdb.com/api/json/v1/1/filter.php?c=${myCategory}`);
    myRequest.send();
    //     console.log(myRequest);

    myRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            // console.log(this.readyState);
            // console.log(this.status);
            // console.log(this.responseText);
            ourMeal = JSON.parse(this.responseText).meals;
            //     console.log(ourMeal);

            displayMeals();
        }
    }

}

function displayMeals() {
    let ourMeals = ``
    for (let i = 0; i < ourMeal.length; i++) {
        //Create My Data
        ourMeals +=
            `<div class="col-md-3">
                 <div class="mealsContent">
                      <img class="img-fluid mt-5 " src='${ourMeal[i].strMealThumb}'>
                     <h1 class="fs-5">  ${ourMeal[i].strMeal}</h1>
        <button class='btn btn-info'>
                <a class='text-white' target="_blank" href="">source</a>
        </button>
        <button class='btn btn-warning'>
                <a href="details.html?mId=${ourMeal[i].idMeal}" method="" class='text-white'>details</a>
        </button>
      
                </div>
        </div> `
    }

    document.getElementById("postMeals").innerHTML = ourMeals;
}