'use strict';

// let points = 0;

//listen for inputs
  $('input[type=range]').on('input', (e) => {
    console.log(e.currentTarget.value);
    console.log('total', getTotalPoints()); 
    $('.levelHere').text(`${getTotalPoints()}`);
  })

// update points counter with range value here
//in case number comes back as a string, convert it to a number/integer with parseInt()
function getTotalPoints() {
  let points = 0
  let ranges = $('.ranges input');
    for(let i = 0; i < ranges.length; i++){
        points += Number(ranges[i].value);
    }
    return parseInt(points);
  }


//determine stress level
function levels() {
    if(points < 39){
        $('.lowSat').toggleClass('hidden');
    }
    else if(points >= 40 && points <= 50){
        $('.medSat').toggleClass('hidden');
    }else {
        $('.highSat').toggleClass('hidden')
    }
    
}

//click even on open submit
$('.open').click(function(){
    $('.openingPage').toggleClass('hidden');
    console.log("something happened");
    $('.q').toggleClass('hidden');
    levels();
})

//click even on form submit
$('form').on('click', '.submit', function(){
    $('form').hide();
})

//document.ready()
$('document').ready(function startPage(){

})

