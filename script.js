'use strict';


//let levelpoints = `${getTotalPoints()}`;

//listen for inputs
  $('input[type=range]').on('input', (e) => {
    console.log(e.currentTarget.value);
    console.log('total', getTotalPoints()); 
    $('.levelHere').text(`${getTotalPoints()}`);
  })

// update points counter with range value here
//in case number comes back as a string, convert it to a number/integer with parseInt()
function getTotalPoints() {
  let points = 0;
  let ranges = $('.ranges input');
    for(let i = 0; i < ranges.length; i++){
        points += Number(ranges[i].value);
    }
    return parseInt(points);
  }


//determine stress level
function levels() {
  const points = getTotalPoints();
    if(`${getTotalPoints()}` < 39){
        $('.lowSat').toggleClass('hidden');
    }
    else if(`${getTotalPoints()}` >= 40 && `${getTotalPoints()}` <= 50){
        $('.medSat').toggleClass('hidden');
    }else {
        $('.highSat').toggleClass('hidden')
    }   
}

//click event on OPEN 
$('.open').click(function(){
    $('.openingPage').toggleClass('hidden');
    console.log("something happened");
    $('.q').toggleClass('hidden');
})

//click event on FORM submit
$('form').on('click', '.submit', function(){
  event.preventDefault();
    $('.q').toggleClass('hidden');
    console.log("this thing submitted")
    levels();
})

//click event on BACK submit
$('.result').on('click', '.back', function(event){
  event.preventDefault();
    // $(this).prev('.result').toggleClass('hidden'); //why isn't this line working??
     $(this).closest('.result').toggleClass('hidden');
    $('.q').toggleClass('hidden');
    console.log("back button clicked");
})

//document.ready()
$('document').ready(function startPage(){

})




/* *******************cocktail api**************** */
//cocktail
const apiKey = "1";
const searchURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php"; 

function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
  console.log()
}

//create params and connect base URL and params together
function getDrinks(query) {
  const params = {
    api_key: apiKey,
    s: query,
  };
  const queryString = formatQueryParams(params)
  //connect the base URL to the queryString for the full ***url***
  const url = searchURL + '?' + queryString;



function displayResults(responseJson) {
  //responseJson which is response.json() holds all data of object which was created in the fetch(url)
  console.log(responseJson);
  // if there are previous results, remove them
  $('.cocktails').empty();
  
for (let i = 0; i < responseJson.drinks.length; i++){
  const keys = Object.keys(responseJson.drinks[i])
  console.log(keys);
  
  for (const key of keys) {
  console.log(key)
   if(key.includes('strIngredient') && responseJson.drinks[i][key] != null) {
     //let str = keys.target();
     console.log(responseJson.drinks[i][key])

      //keys.slice(12, str.length)
       $('.appendDrink').append(
      `<p>${responseJson.drinks[i][key]}</p>`
       )
      }
}

    //add item to the results 
    $('.appendDrink').append(
      `<li>
      <p>${responseJson.drinks[i].strDrink}</p>
      <img src="${responseJson.drinks[i].strDrinkThumb}" width="235" height="235" alt="drink image">
      <p>${responseJson.drinks[i].strInstructions}</p>
      </li>`
    )};
};


  //fetch to get respons.json() with all it's data
  fetch(url) //get resonseJson data from url
    .then(response => { //I promise when response is ready...
    console.log(response)
      if (response.ok) { // if response is true...
        return response.json(); //return the json object
      }
      // statusText gives back the status error... example) OK for 200
      throw new Error(response.statusText); //otherwise create an error
    })
    //response.json() becomes the variable responseJson here:
    .then(responseJson =>   displayResults(responseJson))  //I promise when the responseJson is ready, to display the results to page
    .catch(err => {  //if something messes up display this error:
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}

function watchForm() {
  $('#drink-form').submit(event => {
    event.preventDefault();
    const searchDrink = $('#drink-search').val();
    getDrinks(searchDrink);
  });
}

$(watchForm);