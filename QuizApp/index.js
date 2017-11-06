/* global $ */
'use strict';

/******************************************************** 
Step 1: Define objects & database 
********************************************************/

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
  currentQuestion: 0,
  currentRadioButtonChoice: 0,
  currentScore: 0,
  lastQuestionAnswered: 0,
  lastQuestionCorrect: false,
  quizSummaryHTML:''
};

/******************************************************** 
 * Step 2: Define functions that process user interaction 
 ********************************************************/

function respondToUserButton() {
    //Set the currentView and what is next?
    //if currentView === 0
      //currentView = 1
      //call renderQuestions();
      //call renderQuizPage();
    //else if currentView === 1
     //currentView = 2
     //renderFeedback()
    //else if currentView === 2
     //if question===10 then currentView = 3
      //else currentView = 1
    //else if currentView === 3
      //currentView = 0
      //call renderQuizResults()


}

/******************************************************** 
 * Step 3: Define event listeners
 ********************************************************/

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
      //increment currentQuestion++
      //generateHTML()
      //renderQuizPage()
      //call handleRadioButtonClicked()
      //call handleUserButton();
}

function renderFeedback() {
    //get current userChoice
    //compare to correctAnswer
    //update currentscore if necessary
    //STORE['correctAnswer'] = userChoice === QUESTIONS[0].userChoice;
    //renderQuizPage
    //call handleUserButton()
}

function renderQuizResults() {
    //generateHTML() --> loop through questions using map and compare last two fields
    //renderQuizPage
    
}

function renderQuizPage() {
    //generateHTML()
    //pulls data from STORE
}

function generateHTML() {
    //what view are we on?
    //
}

/******************************************************** 
 * Step 4: Main function which calls all the others 
 ********************************************************/ 

//  function main() {}
    handleUserButton(){};


// Start the main loop when the web page finishes loading.
$(function(){
  handleUserButton();
  handleAnswerSubmitted();
});