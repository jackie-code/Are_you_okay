const INSULT_URL = "https://evilinsult.com/generate_insult.php?lang=en&type=json";
//this api doesn't come with cors so we added cors-anywhere 
//This API enables cross-origin requests to anywhere 
const CORS_ANYWHERE_URL = "https://cors-anywhere.herokuapp.com/";

function fetchTheData(url) {
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            //this is the correct scope to console.log data as a json object
            console.log("insultDataJson:", data);
            displayInsults(data);
        })
        .catch(err => {
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
        });
}


function displayInsults(data) {
    let insult = data.insult;
    $('.appendInsults').empty(); // allows only one insult at a time per click
    $('.appendInsults').append(
        `<p>${insult}</p>`
    )
}


function onInsultButtonClick(event) {
    event.preventDefault();
    fetchTheData(CORS_ANYWHERE_URL + INSULT_URL);
}
$('#insultClickButton').click(onInsultButtonClick);