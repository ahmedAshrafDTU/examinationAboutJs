let arr;
let searchWord = $("#searchWord");
let searchFirstLitter = $("#searchFirst");
$(document).ready(async function () {
  $(".navbar-nav a").click(function () {
    $(".coloringBox").animate({ left: -boxWidth }, 300);
  });
  // Animating to specific Section on clicking on any link
  $('.navbar-collapse a[href^="#"]').click(function () {
    //* $(".navbar-collapse a").not(".test");
    const section = $(this).attr("href");
    const allSection = $(section).offset().top;
    $("html,body").animate({ scrollTop: allSection }, 2000);
  });
  // Loading screen
  $(".loadingScreen").fadeOut(500, function () {
    $("body").css("overflow", "visible");
  });
  const boxWidth = $(".coloringBox").outerWidth();
  $(".openIcon").click(function () {
    $(".coloringBox").animate({ left: -boxWidth }, 100);
    $(".closeIcon").removeClass("d-none");
    $(".openIcon").addClass("d-none");
    $(".navbar-nav a").animate({ padding: "0px" }, 300);
  });
  $(".closeIcon").click(function () {
    $(".coloringBox").animate({ left: 0 }, 300);
    $(".openIcon").removeClass("d-none");
    $(".closeIcon").addClass("d-none");
    $(".navbar-nav a").animate({ padding: "30px" }, 500);
  });
  $(".coloringBox").animate({ left: -boxWidth }, 300);

  //////////////////////////////////////////////////////
  let MyWithOpenWebsite = new withOpenWebsite();
  arr = await MyWithOpenWebsite.getDataFromApi();
  // console.log(await MyWithOpenWebsite.getDataFromApi());
  MyWithOpenWebsite.displayAllData();
  //////////////////////////////////////////////////////
  // search
});

//****************  Start Global Functions   ************************
function displayInfoMeals(arr) {
  let cartoona = "";

  for (let i = 0; i < arr.length; i++) {
    cartoona += `     <div class="col-md-4 overflow-hidden ">
                    <figure class="position-relative   p-3">
                        <img class="w-100" src="${arr[i].strMealThumb}" alt="">
                         <div onclick="getMealDetails(${arr[i].idMeal})" class="layer position-absolute " style="background-color: rgba(0, 0, 0, 0.5);"><h3>${arr[i].strMeal}</h3>
                        </div>
                    </figure> </div>`;
  }

  document.querySelector("header .row").innerHTML = cartoona;
}
async function getMealDetails(mealID) {
  let respone = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
  );
  respone = await respone.json();

  displayAllDataById(respone.meals[0]);
}
function displayAllDataById(term) {
  let temp = term;

  let cartona = `
   <div class="details">
<div class="row">
    <div class="col-md-4">
        <div>
            <img class="w-100" src="${temp.strMealThumb}" alt="">
        </div>
    </div>
    <div class="col-md-8">
        <div>
            <h2>Instructions</h2>
            <p>${temp.strInstructions}</p>
            <ul>
                <li>Area: <span>${temp.strArea}</span></li>
                <li>Category : <span>${temp.strCategory}</span></li>
                <li>Recipes : <span> </span></li>
             </ul>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure1 + temp.strIngredient1
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure2 + temp.strIngredient2
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure3 + temp.strIngredient3
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure4 + temp.strIngredient4
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure5 + temp.strIngredient5
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure6 + temp.strIngredient6
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure7 + temp.strIngredient7
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure8 + temp.strIngredient8
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure9 + temp.strIngredient9
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure10 + temp.strIngredient10
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure11 + temp.strIngredient11
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure12 + temp.strIngredient12
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure13 + temp.strIngredient13
            } </div>
             
          
            <li> <span>Tags:</span></li>
            <div class="bg-info p-2 mb-3 rounded" style="width: fit-content ;">${
              temp.strTags
            } </div>
            <a href="${
              temp.strSource
            }"> <div class="bg-info p-2 rounded" style="display:inline-block;width: fit-content ;">Source </div></a>
            
            <a href="${temp.strYoutube}">
            <div class="bg-info p-2 rounded" style="display:inline-block;width: fit-content ;">Youtube </div>
            </a>
        </div>
    </div>
</div>
            </div>
  
  `;

  document.querySelector("header .row").innerHTML = cartona;
}
//****************  End Global Functions    ************************
//****************  Start with open Websites    ************************
function Instructions(index) {
  let temp = arr[index];
  console.log(temp);

  let cartona = `
   <div class="details">
<div class="row">
    <div class="col-md-4">
        <div>
            <img class="w-100" src="${temp.strMealThumb}" alt="">
        </div>
    </div>
    <div class="col-md-8">
        <div>
            <h2>Instructions</h2>
            <p>${temp.strInstructions}</p>
            <ul>
                <li>Area: <span>${temp.strArea}</span></li>
                <li>Category : <span>${temp.strCategory}</span></li>
                <li>Recipes : <span> </span></li>
             </ul>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure1 + temp.strIngredient1
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure2 + temp.strIngredient2
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure3 + temp.strIngredient3
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure4 + temp.strIngredient4
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure5 + temp.strIngredient5
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure6 + temp.strIngredient6
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure7 + temp.strIngredient7
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure8 + temp.strIngredient8
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure9 + temp.strIngredient9
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure10 + temp.strIngredient10
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure11 + temp.strIngredient11
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure12 + temp.strIngredient12
            } </div>
            <div class="bg-info p-2 mb-3 rounded" style="display:inline-block;width: fit-content ;">${
              temp.strMeasure13 + temp.strIngredient13
            } </div>
             
          
            <li> <span>Tags:</span></li>
            <div class="bg-info p-2 mb-3 rounded" style="width: fit-content ;">${
              temp.strTags
            } </div>
            <a href="${
              temp.strSource
            }"> <div class="bg-info p-2 rounded" style="display:inline-block;width: fit-content ;">Source </div></a>
            
            <a href="${temp.strYoutube}">
            <div class="bg-info p-2 rounded" style="display:inline-block;width: fit-content ;">Youtube </div>
            </a>
        </div>
    </div>
</div>
            </div>
  
  `;

  document.querySelector("header .row").innerHTML = cartona;
}

class withOpenWebsite {
  async getDataFromApi() {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    let data = await res.json();
    return data.meals;
  }

  displayAllData() {
    let cartona = "";
    for (let i = 0; i < arr.length; i++) {
      cartona += `
     <div class="col-md-4 overflow-hidden ">
                    <figure class="position-relative   p-3">
                        <img class="w-100" src="${arr[i].strMealThumb}" alt="">
                         <div onclick="Instructions(${i})" class="layer position-absolute " style="background-color: rgba(0, 0, 0, 0.5);">${arr[i].strMeal}
                        </div>
                    </figure> </div>
    `;
    }

    document.querySelector("header .row").innerHTML = cartona;
  }
}
//****************  End with open Websites    ************************
//****************  Start Search Functions  ************************
$("#search").click(function () {
  console.log("hello");
  $("header .row").html(`
<div class="container-fluid  vh-100  bg-dark ">
    <div class="d-flex justify-content-between">
    <input type="search" onkeyup="searchByName(this.value)" class="w-100" me-3" id="searchWord" placeholder="Search By Name">
    
    <input type="search" onkeyup="searchByLitter(this.value)"class="w-100" maxlength="1" id="searchFirst" placeholder="Search By Letter">

    </div>

<!-- ************ -->
<div class="container">
    <div class="row" id="addData">

    </div>
</div>
`);
});

async function searchByName(term) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
  );
  response = await response.json();

  response.meals ? displayMeals(response.meals) : displayMeals([]);
}

async function searchByLitter(term) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
  );
  response = await response.json();

  response.meals ? displayMeals(response.meals) : displayMeals([]);
}

function displayMeals(arr) {
  let cartoona = "";

  for (let i = 0; i < arr.length; i++) {
    cartoona += `     <div class="col-md-4 overflow-hidden ">
                    <figure class="position-relative   p-3">
                        <img class="w-100" src="${arr[i].strMealThumb}" alt="">
                         <div onclick="getMealDetails(${arr[i].idMeal})" class="layer position-absolute " style="background-color: rgba(0, 0, 0, 0.5);"><h3>${arr[i].strMeal}</h3>
                        </div>
                    </figure> </div>`;
  }

  document.querySelector("#addData").innerHTML = cartoona;
}

//****************  End category Functions  ************************
//****************  Start category Functions  ************************
$("#catege").click(function () {
  console.log("category");
  getCategories();
});

async function getCategories() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  response = await response.json();

  displayCategories(response.categories);
}

function displayCategories(arr) {
  let cartoona = "";

  for (let i = 0; i < arr.length; i++) {
    cartoona += `
        <div class="col-md-3">
                <div onclick="getCategoryMeals('${
                  arr[i].strCategory
                }')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${
                      arr[i].strCategoryThumb
                    }" alt="" srcset="">
                    <div class="meal-layer position-absolute text-center text-black p-2">
                        <h3>${arr[i].strCategory}</h3>
                        <p>${arr[i].strCategoryDescription
                          .split(" ")
                          .slice(0, 20)
                          .join(" ")}</p>
                    </div>
                </div>
        </div>
        `;
  }

  document.querySelector("header .row").innerHTML = cartoona;
}

async function getCategoryMeals(category) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  response = await response.json();
  displayInfoMeals(response.meals.slice(0, 20));
}

//****************  End Search Functions  ************************
//****************  Start Area Functions  ************************
$("#area").click(function () {
  console.log("area");
  getAreaApi();
});

async function getAreaApi() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  response = await response.json();
  displayArea(response.meals);
}

function displayArea(arr) {
  console.log(arr);
  let cartoona = "";
  for (let i = 0; i < arr.length; i++) {
    cartoona += `
 <div class="col-md-3">
                <div onclick="getAreaMeals('${arr[i].strArea}')" class="rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${arr[i].strArea}</h3>
                </div>
        </div>
  `;
  }
  console.log(cartoona);
  document.querySelector("header .row").innerHTML = cartoona;
}

async function getAreaMeals(area) {
  console.log(area);
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  response = await response.json();
  displayInfoMeals(response.meals.slice(0, 20));
}
//****************  End Area Functions  ************************
//****************  Start Ingredients Functions  ************************
$("#Ingredients").click(function () {
  console.log("Ingredients");
  getIngredientsApi();
});

async function getIngredientsApi() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  response = await response.json();
  displayIngredients(response.meals.slice(0, 20));
}

function displayIngredients(arr) {
  console.log(arr);
  let cartoona = "";
  for (let i = 0; i < arr.length; i++) {
    cartoona += `
 <div class="col-md-3">
                <div onclick="getIngredientsMeals('${arr[i].strIngredient}')" class="rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${arr[i].strIngredient}</h3>
                        <p>${arr[i].strDescription}</p>
                </div>
        </div>
        
  `;
  }
  // console.log(cartoona);
  document.querySelector("header .row").innerHTML = cartoona;
}

async function getIngredientsMeals(ingredients) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`
  );
  response = await response.json();
  console.log(response);
  displayInfoMeals(response.meals.slice(0, 20));
}

//****************  End Ingredients Functions  ************************
//****************  Start Contact ************************
$("#contact").click(function () {
  console.log("contact");
  document.querySelector(
    "header .row"
  ).innerHTML = `    <!--Section: Contact v.2-->
<div class="regex">
    <!--Section heading-->
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <!--Section description-->
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within
        a matter of hours to help you.</p>
    <div class="container ">
        <div class="row">
            <!-- name -->
            <div class="col-md-6">
                <div class="md-form mb-0">
                    <input type="text" id="name" name="name" onkeyup="inputValidation()" class="form-control">
                    <label for="name" class="">Your name</label>
                </div>
            </div>
            <!--email-->
            <div class="col-md-6">
                <div class="md-form mb-0">
                    <input type="text" id="email" name="email" onkeyup="inputValidation()" class="form-control">
                    <label for="email" class="">Your email</label>
                    <div class="alert alert-info" id="alertemail" role="alert">
                        Email not valid *exemple@yyy.zzz
                    </div>
                </div>
            </div>
            <!--phone-->
            <div class="col-md-6">
                <div class="md-form mb-0">
                    <input type="text" id="phone" name="email" onkeyup="inputValidation()" class="form-control">
                    <label for="email" class="">Your Phone</label>
                    <div class="alert alert-info" id="alertphone" role="alert">
                        Enter valid Phone Number
                    </div>
                </div>
            </div>
            <!-- age -->
            <div class="col-md-6">
                <div class="md-form mb-0">
                    <input type="text" id="age" name="email" onkeyup="inputValidation()" class="form-control">
                    <label for="email" class="">Your age</label>
                    <div class="alert alert-info" id="alertage" role="alert">
                        Enter valid age
                    </div>
                </div>
            </div>
            <!-- password -->
            <div class="col-md-6">
                <div class="md-form mb-0">
                    <input type="text" id="password" name="email" onkeyup="inputValidation()" class="form-control">
                    <label for="email" class="">Your password</label>
                    <div class="alert alert-info" id="alertpassword" role="alert">
                        Enter valid password *Minimum eight characters, at least one letter and one number:*
                    </div>
                </div>
            </div>
            <!-- Re password -->
            <div class="col-md-6">
                <div class="md-form mb-0">
                    <input type="text" id="repassword" name="email" onkeyup="inputValidation()" class="form-control">
                    <label for="email" class="">Your repassword</label>
                    <div class="alert alert-info" id="alertrepassword" role="alert">
                        Enter valid repassword
                    </div>
                </div>
            </div>
            <button type="button" id="contactSend" class="btn btn-primary m-auto" style="width: fit-content;">Primary</button>
        </div>
    </div>


</div>`;
});

//****************  End Contact ************************

// Start validation
let complete = 0;
function inputValidation() {
  let emailInputValidation = $("#email").val();
  let phoneInputValidation = $("#phone").val();
  let ageInputValidation = $("#age").val();
  let passwordInputValidation = $("#password").val();
  let repasswordInputValidation = $("#repassword").val();

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const phoneRegex = /^0\d{10}$/;
  const ageRegex = /^\d+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const rePasswordRegex =
    passwordInputValidation == repasswordInputValidation ? true : false;
  if (emailRegex.test(emailInputValidation)) {
    $("#alertemail").hide();
    complete++;
  } else {
    $("#alertemail").show();
  }
  if (phoneRegex.test(phoneInputValidation)) {
    $("#alertphone").hide();
    complete++;
  } else {
    $("#alertphone").show();
  }
  if (ageRegex.test(ageInputValidation)) {
    $("#alertage").hide();
    complete++;
  } else {
    $("#alertage").show();
  }
  if (passwordRegex.test(passwordInputValidation)) {
    $("#alertpassword").hide();
    complete++;
  } else {
    $("#alertpassword").show();
  }
  if (rePasswordRegex) {
    $("#alertrepassword").hide();
    complete++;
  } else {
    $("#alertrepassword").show();
  }
  // ******************

  if (complete == 5) {
    document.querySelector("#contactSend").innerHTML = " enable ";
    document.querySelector("#contactSend").style = "backgournd:green";
  }
}

// End validation
