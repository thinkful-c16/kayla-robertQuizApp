/* global $ */
'use strict';

//define data stores 
//question, answer1, answer2, answer3, answer4, answer5, correct, userChoice 

/******************************************************** 
 * Step 1: Define objects & database ********************
 * ************************************/
const QUESTIONS = [
  {question: '', answer1: '', answer2: '', answer3: '', answer4: '', answer5: '', correct: 0 , userChoice: 0},
  {question: '', answer1: '', answer2: '', answer3: '', answer4: '', answer5: '', correct: 0 , userChoice: 0},
  {question: '', answer1: '', answer2: '', answer3: '', answer4: '', answer5: '', correct: 0 , userChoice: 0},
  {question: '', answer1: '', answer2: '', answer3: '', answer4: '', answer5: '', correct: 0 , userChoice: 0},
  {question: '', answer1: '', answer2: '', answer3: '', answer4: '', answer5: '', correct: 0 , userChoice: 0},
  {question: '', answer1: '', answer2: '', answer3: '', answer4: '', answer5: '', correct: 0 , userChoice: 0},
  {question: '', answer1: '', answer2: '', answer3: '', answer4: '', answer5: '', correct: 0 , userChoice: 0},
  {question: '', answer1: '', answer2: '', answer3: '', answer4: '', answer5: '', correct: 0 , userChoice: 0},
  {question: '', answer1: '', answer2: '', answer3: '', answer4: '', answer5: '', correct: 0 , userChoice: 0},
  {question: '', answer1: '', answer2: '', answer3: '', answer4: '', answer5: '', correct: 0 , userChoice: 0}];

const STORE = {
  currentView: 0,
  currentRadioButtonChoice: 0,
  currentScore: 0,
  lastQuestionAnswered: 0,
};

/******************************************************** 
 * Step 2: Define functions that process user interaction 
 ********************************************************/


function respondToUserButton() {
    //which page are we currently on and what is next?

}


/******************************************************** 
 * Step 3: Define event listeners
 ********************************************************/
//Listen for clicking the user button
//Listen for clicking on the multiple choice radio button
//

function handleUserButton() {
    //wait on user to click -->
    //call the function that does stuff
    //updates the STORE 
    //call respondToUserButton(){}
};


function handleRadioButtonClicked() {
    //wait on user to click 
    //update the STORE with current radio button choice

};

/******************************************************** 
* Utility housekeeping functions 
********************************************************/

function renderQuestions() {
    //only if the STORE is on pages that show questions
}

function renderQuizPage() {}

function generateHTML() {}

/******************************************************** 
 * Step 4: Main function which calls all the others 
 ********************************************************/ 

//  function main() {}
    handleUserButton(){};


// Start the main loop when the web page finishes loading.
$(function(){
  handleAnswerSubmitted();
});