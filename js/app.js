'use strict';

//function
function takeUserInput(message){
  return prompt(message);
}

function getValidationInfoInput(userInput , message){
  while(userInput === undefined || userInput === '' || userInput === null){
    var userInput = takeUserInput(message);
  }
  return userInput;
}


var userName = getValidationInfoInput(userName , 'Enter your name please .. ');

var rightCounter = 0 ;

alert( userName + '  Welcome to my website guess About me ..   ');
console.log( userName + '  Welcome to my website guess About me ..   ');


// q1
var Q1 = takeUserInput('Is my best meal is fried chicken ?');

while( Q1 === '' || Q1 === null ) {
  alert( ' you must enter Yes or No Question ..');
  var Q1 = takeUserInput('Is my best meal is fried chicken ?');
}

while( Q1.toLowerCase() !== 'y' && Q1.toLowerCase() !== 'yes' && Q1.toLowerCase() !== 'n' && Q1.toLowerCase() !== 'no') {
  alert( ' you must enter Yes or No Question ..');
  var Q1 = takeUserInput('Is my best meal is fried chicken ?');
}

if( Q1.toLowerCase() === 'yes' || Q1.toLowerCase() === 'y'){
  alert( 'Ops.. wrong answer ');
  console.log( 'Ops.. wrong answer ');
  console.log(Q1);
} else if (Q1.toLowerCase() === 'no' || Q1.toLowerCase() === 'n'){
  alert( 'Nice .. correct answer');
  console.log( 'Nice .. correct answer');

  rightCounter++ ;
  console.log(Q1);
}

// q2
var Q2 = takeUserInput('Is my favorite color is yellow ?');

while( Q2 === '' || Q2 === null ) {
  alert( ' you must enter Yes or No Question ..');
  var Q2 = takeUserInput('Is my favorite color is yellow ?');
}

while( Q2.toLowerCase() !== 'y' && Q2.toLowerCase() !== 'yes' && Q2.toLowerCase() !== 'n' && Q2.toLowerCase() !== 'no') {
  alert( ' you must enter Yes or No Question ..');
  var Q2 = takeUserInput('Is my favorite color is yellow ?');
}

if( Q2.toLowerCase() === 'yes' || Q2.toLowerCase() === 'y'){
  alert( 'Nice .. correct answer');
  console.log( 'Nice .. correct answer');

  rightCounter++ ;
  console.log(Q2);
} else if (Q2.toLowerCase() === 'no' || Q2.toLowerCase() === 'n'){
  alert( 'Ops.. wrong answer ');
  console.log( 'Ops.. wrong answer ');

  console.log(Q2);
}

// q3
var Q3 = takeUserInput('Is my university located in Irbid?');

while( Q3 === '' || Q3 === null ) {
  alert( ' you must enter Yes or No Question ..');
  var Q3 = takeUserInput('Is my university located in Irbid?');
}

while( Q3.toLowerCase() !== 'y' && Q3.toLowerCase() !== 'yes' && Q3.toLowerCase() !== 'n' && Q3.toLowerCase() !== 'no') {
  alert( ' you must enter Yes or No Question ..');
  var Q3 = takeUserInput('Is my university located in Irbid? ?');
}

if( Q3.toLowerCase() === 'yes' || Q3.toLowerCase() === 'y'){
  alert( 'Nice .. correct answer');
  console.log( 'Nice .. correct answer');
  rightCounter++ ;
  console.log(Q3);
} else if (Q3.toLowerCase() === 'no' || Q3.toLowerCase() === 'n'){
  alert( 'Ops.. wrong answer ');
  console.log( 'Ops.. wrong answer ');

  console.log(Q3);
}

// q4
var Q4 = takeUserInput('Is my favourit series is the Start-Up ?');

while( Q4 === '' || Q4 === null ) {
  alert( ' you must enter Yes or No Question ..');
  var Q4 = takeUserInput('Is my favourit series is the Start-Up ?');
}

while( Q4.toLowerCase() !== 'y' && Q4.toLowerCase() !== 'yes' && Q4.toLowerCase() !== 'n' && Q4.toLowerCase() !== 'no') {
  alert( ' you must enter Yes or No Question ..');
  var Q4 = takeUserInput('Is my favourit film is the fualt in our stars ?');
}

if( Q4.toLowerCase() === 'yes' || Q4.toLowerCase() === 'y'){
  alert( 'Nice .. correct answer');
  console.log( 'Nice .. correct answer');
  rightCounter++ ;
  console.log(Q4);
} else if (Q4.toLowerCase() === 'no' || Q4.toLowerCase() === 'n'){
  alert( 'Ops.. wrong answer ');
  console.log( 'Ops.. wrong answer ');

  console.log(Q4);
}

//q5

var Q5 = takeUserInput('Do I have sisters?');

while( Q5 === '' || Q5 === null ) {
  alert( ' you must enter Yes or No Question ..');
  var Q5 = takeUserInput('Do I have sisters?');
}

while( Q5.toLowerCase() !== 'y' && Q5.toLowerCase() !== 'yes' && Q5.toLowerCase() !== 'n' && Q5.toLowerCase() !== 'no') {
  alert( ' you must enter Yes or No Question ..');
  var Q5 = takeUserInput('Do I have sisters?');
}

if( Q5.toLowerCase() === 'yes' || Q5.toLowerCase() === 'y'){
  alert( 'Ops.. wrong answer ');
  console.log( 'Ops.. wrong answer ');

  console.log(Q5);
} else if (Q5.toLowerCase() === 'no' || Q5.toLowerCase() === 'n'){
  alert( 'Nice .. correct answer');
  console.log( 'Nice .. correct answer');
  rightCounter++ ;
  console.log(Q5);
}


// Q6
var number = 17 ;
var counter1 = 0 ;

for(var i= 0 ; i<4 ; i++ ){

  var Q6 = takeUserInput(' Guess a favorite number of me ? .. ');

  while( Q6 === '' || Q6 === null ) {
    alert( ' you must enter the number ..');
    var Q6 = takeUserInput(' Guess a favorite number of me ? .. ');
  }

  if(parseInt(Q6) === number){
    alert( 'nice .. Correct answer ');
    console.log('nice .. Correct answer ');
    rightCounter++ ;
    break;
  } else if ( parseInt(Q6) > number){
    alert( ' upper than the correct number .. ');
    console.log(' upper than the correct number .. ');

  } else if ( parseInt(Q6) < number){
    alert( ' lower than the correct number .. ');
    console.log(' lower than the correct number .. ');

  }
  counter1 ++ ;
}

if(counter1 === 4){
  alert( 'The correct number is ' + number );
  console.log('The correct number is ' + number);

}

// Q7

var cities = ['italy' , 'netherlands' , 'south_Korea' , 'spain'] ;

var counter = 0 ;

for(var i= 0 ; i<6 ; i++ ){

  var Q7 = takeUserInput('What are the country that I prefer to visit oneday?');

  while( Q7 === '' || Q7 === null ) {
    alert( ' you must enter the input ..');
    var Q7 = takeUserInput('What are the country that I prefer to visit oneday?');
  }

  switch (Q7.toLowerCase()) {
  case cities[0]:
  case cities[1]:
  case cities[2]:
  case cities[4]:

    rightCounter++ ;

    console.log('nice.. correct answer \n  The cities  I prefer to visit oneday : ' +'\n' + cities[0]+ '\n' + cities[1]+ '\n' + cities[2] + '\n'+ cities[3]);

    alert( 'nice.. correct answer \n  The cities  I prefer to visit oneday : ' +'\n' + cities[0]+ '\n' + cities[1]+ '\n' + cities[2] + '\n'+ cities[3]);
    break;

  default:
    alert( ' Try again  ..');
    console.log(' Try again  ..');
  }

  if(Q7.toLowerCase() === 'italy' || Q7.toLowerCase() === 'netherlands' || Q7.toLowerCase() === 'south_Korea' || Q7.toLowerCase() === 'spain'){
    break;
  }

  counter ++ ;
}

if(counter === 6){
  alert( 'The correct answer is ' + cities );
  console.log( 'The correct answer is ' + cities );
}



// the count of right answer

if( rightCounter > 4 ){
  alert( 'Good job  .. The count of your right answer ..  ' + rightCounter );
  console.log( 'Good job  .. The count of your right answer ..  ' + rightCounter );


} else {
  alert( ' The count of your right answer ..  ' + rightCounter );
  console.log( ' The count of your right answer ..  ' + rightCounter );
}
