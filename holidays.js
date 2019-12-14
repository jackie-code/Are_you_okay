const api_key = "ee33e7e06cd36afdce7ff346e31834941f758ce2";
const URL = "https://calendarific.com/api/v2/holidays?api_key=ee33e7e06cd36afdce7ff346e31834941f758ce2&country=US&year=2019";

function fetchData(url) {
    fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
            displayHolidays(data);
        })
        .catch(err => {
            //if something messes up display this error:
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
        });
}


function displayHolidays(holidayResults) {
    for (let i = 0; i < holidayResults.response.holidays.length; i++) {
        const date = holidayResults.response.holidays[i].date.iso;
        const name = holidayResults.response.holidays[i].name;
        $('.appendHoliday').append(
            `<p>${date}, ${name}</p>`
        )
    }
}


//create a function that loops through all of holidayResults.response.holidays and create a new variable called current date and set it equal to newDateObject (look up the date api) then 







function onHolidayButtonClick(event) {
    event.preventDefault();
    const holidayResults = fetchData(URL);
    console.log("initial holiday results", holidayResults);
    // displayHolidays();

}
$('.holidayClick').click(onHolidayButtonClick);