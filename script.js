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
$(document).ready(function() {
  //clear out DOM in results area
  $("#insultClickButton").on("click", function() {
    console.log("insult button clicked");
    $(".appendDrink").html("");
    $(".appendHoliday").html("");
  });

  $(".drinkClick").on("click", function() {
        console.log("drink button clicked");
    $(".appendInsults").html("");
    $(".appendHoliday").html("");
  });

  $(".holidayClick").on("click", function() {
        console.log("holiday button clicked");
    $(".appendDrink").html("");
    $(".appendInsults").html("");
  });
})










