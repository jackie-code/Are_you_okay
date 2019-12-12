const INSULT_URL = "https://evilinsult.com/generate_insult.php?lang=en&type=json";
const CORS_ANYWHERE_URL = "https://cors-anywhere.herokuapp.com/";

function fetchData(url) {
  fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    console.log("insultDataJson:", data);
    displayInsults(data);
  })
  .catch(err => {
    $('#js-error-message').text(`Something went wrong: ${err.message}`);
  });
}


function displayInsults(data){
   let insult = data.insult;
   $('.appendInsults').append(
      `<p>${insult}</p>`
       )
   }


function onInsultButtonClick(event) {
        event.preventDefault();
        fetchData(CORS_ANYWHERE_URL + INSULT_URL);
      }
$('#insultClickButton').click(onInsultButtonClick);


