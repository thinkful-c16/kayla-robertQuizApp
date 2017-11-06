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
  currentScore: 0,
  lastQuestionAnswered: 0,
};

/******************************************************** 
 * Step 2: Define functions that process user interaction 
 ********************************************************/

//template generators

function renderQuestions() {}


/******************************************************** 
 * Step 3: Define functions that do have user interaction 
 ********************************************************/
//Listen for clicking the user button
//Listen for clicking on the multiple choice radio button
//

function handleUserButton() {};
function handleRadioButtonClicked() {};

/******************************************************** 
* Utility housekeeping functions 
********************************************************/

function renderQuizPage()

/******************************************************** 
 * Step 4: Main function which calls all the others 
 ********************************************************/ 

//  function main() {
    handleUserButton();
}

// Start the main loop when the web page finishes loading.
$(function(){
  handleAnswerSubmitted();
});