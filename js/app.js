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
