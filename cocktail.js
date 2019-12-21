/* *******************cocktail api**************** */
//cocktail
const apiKey = "1";
const searchURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
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

    for (let i = 0; i < responseJson.drinks.length; i++) {
      const keys = Object.keys(responseJson.drinks[i])
      console.log(keys);

      for (const key of keys) {
        console.log(key)
        if (key.includes('strIngredient') && responseJson.drinks[i][key] != null) {
          //let str = keys.target();
          console.log(responseJson.drinks[i][key])

          //keys.slice(12, str.length)
          $('.appendDrink').append(
            `<p>${responseJson.drinks[i][key]}</p>`
          )
        }
      }
      $('.appendDrink').empty(); //this makes only one result append at a time and refreshes drink on each click
      //add item to the results 
      $('.appendDrink').append(
        `<li>
      <p>${responseJson.drinks[i].strDrink}</p>
      <img src="${responseJson.drinks[i].strDrinkThumb}" width="235" height="235" alt="drink image">
      <p>${responseJson.drinks[i].strInstructions}</p>
      </li>`
      )
    };
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
    .then(responseJson => displayResults(responseJson)) //I promise when the responseJson is ready, to display the results to page
    .catch(err => { //if something messes up display this error:
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