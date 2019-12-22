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
  for (let i = 0; i < ranges.length; i++) {
    // Number() converts data type to a number type
    points += Number(ranges[i].value);
  }
  return parseInt(points);
  moodImage() 
}


//determine stress level
// these are the three window options the sliders lead to...
function levels() {
  const points = getTotalPoints();
  if (`${getTotalPoints()}` < 25) {
    $('.lowSat').toggleClass('hidden');
  } else if (`${getTotalPoints()}` >= 26 && `${getTotalPoints()}` <= 50) {
    $('.medSat').toggleClass('hidden');
  } else {
    $('.highSat').toggleClass('hidden')
  }
}

// this code makes the colors of the level change depending on the sliders
$('.ranges').click(function(){
  if (`${getTotalPoints()}` < 25) {
    $('#levelP').css("color", "red");
  } else if (`${getTotalPoints()}` >= 26 && `${getTotalPoints()}` <= 50) {
    $('#levelP').css("color", "orange");
  } else if (`${getTotalPoints()}` >= 51) {
    $('#levelP').css("color", "green");
  }
})

//click event on page with instructions
$('.open').click(function () {
  $('.openingPage').toggleClass('hidden');
  console.log("you clicked I understand");
  $('.q').toggleClass('hidden');
})

//click event on FORM submit
// class of .q is the slider section
$('form').on('click', '.submit', function () {
  event.preventDefault();
  $('.q').toggleClass('hidden');
  console.log("this form submitted")
  levels();
})



//click event on BACK submit
$('.result').on('click', '.back', function (event) {
  event.preventDefault();
  $(this).closest('.result').toggleClass('hidden');
  $('.q').toggleClass('hidden'); //un-hides sliders
  console.log("back button clicked");
})

//document.ready()
$(document).ready(function () {
  //clear out DOM in results area
  $("#insultClickButton").on("click", function () {
    console.log("insult button clicked");
    $(".appendDrink").html("");
    $(".appendHoliday").html("");
  });

  $(".drinkClick").on("click", function () {
    console.log("drink button clicked");
    $(".appendInsults").html("");
    $(".appendHoliday").html("");
  });

  $(".holidayClick").on("click", function () {
    console.log("holiday button clicked");
    $(".appendDrink").html("");
    $(".appendInsults").html("");
  });
})