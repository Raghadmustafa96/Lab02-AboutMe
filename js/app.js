'use strict';

//function
// function takeUserInput(message){
//   return prompt(message);
// }
var questions = ['Is my best meal is fried chicken ?', 'Is my favorite color is yellow ?', 'Is my university located in Irbid?','Is my favourit series is the Start-Up ?', 'Do I have sisters?'];
var answers = ['n', 'y', 'y', 'y', 'n'];
function getValidationInfoInput(userInput , message){
  while(userInput === undefined || userInput === '' || userInput === null){
    //this code added by AbdalQader
    userInput = prompt(message);
  }
  return userInput;
}


var userName = getValidationInfoInput(userName , 'Enter your name please .. ');
welcomeUser(userName);

var rightCounter = 0 ;
//this code added by AbdalQader
function welcomeUser(userName){
  alert( userName + '  Welcome to my website guess About me ..   ');
  console.log( userName + '  Welcome to my website guess About me ..   ');
}

//This code added by AbdalQader
var size = questions.length;
var q;
for(var i=0; i<size; i++){
  q = prompt(questions[i]);
  q = getValidationInfoInput(q, questions[i]);
  otherAnswers(q, questions[i], answers[i]);
}
//this code added by AbdalQader
//q1
// var message = 'Is my best meal is fried chicken ?';
// var Q1 = prompt(message);
// Q1 = getValidationInfoInput(Q1, message);
// otherAnswers(Q1, message, 'n');




// // q2
// message = 'Is my favorite color is yellow ?';
// var Q2 = prompt(message);
// Q2 = getValidationInfoInput(Q2, message);
// otherAnswers(Q2, message, 'y');



// // q3
// message = 'Is my university located in Irbid?';
// var Q3 = prompt(message);
// Q3 = getValidationInfoInput(Q3, message);
// otherAnswers(Q3, message, 'y');


// // q4
// message = 'Is my favourit series is the Start-Up ?';
// var Q4 = prompt(message)
// Q4 = getValidationInfoInput(Q4, message);
// otherAnswers(Q4, message, 'y');


// //q5

// message = 'Do I have sisters?';
// var Q5 = prompt(message);
// Q5 = getValidationInfoInput(Q5, message);
// otherAnswers(Q5, message, 'n');


//function
// function takeUserInput(message){
//   return prompt(message);
// }
// Q6
var number = 17 ;
var counter1 = 0 ;

for(var i= 0 ; i<4 ; i++ ){

  var Q6 = prompt(' Guess a favorite number of me ? .. ');

  while( Q6 === '' || Q6 === null ) {
    alert( ' you must enter the number ..');
    Q6 = prompt(' Guess a favorite number of me ? .. ');
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

  var Q7 = prompt('What are the country that I prefer to visit oneday?');

  while( Q7 === '' || Q7 === null ) {
    alert( ' you must enter the input ..');
    Q7 = prompt('What are the country that I prefer to visit oneday?');
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


//this code added by AbdalQader
function otherAnswers(answer, message, actualAnswer){
  while( answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'yes' && answer.toLowerCase() !== 'n' && answer.toLowerCase() !== 'no') {
    alert( ' you must enter Yes or No Question ..');
    answer = prompt(message);
  }
  if (answer[0].toLowerCase() === actualAnswer){
    rightCounter+=1;
    alert( 'Nice .. correct answer');
  }else{
    alert( 'Ops.. wrong answer ');
  }
}
