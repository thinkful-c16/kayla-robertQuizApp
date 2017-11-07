/* global $ */
'use strict';

/******************************************************** 
Step 1: Define objects & database 
********************************************************/

const QUESTIONS = [
  {question: 'Which NBA team did Michael spend the majority of his career?', answer1: 'Chicago Bulls', answer2: 'Washington Wizards', answer3: 'Boston Celtics', answer4: 'Phoenix Suns', answer5: 'Los Angeles Lakers', correct: 1, userChoice: 0},
  {question: 'What position did he play?', answer1: 'Point guard', answer2: 'Center', answer3: 'Power Forward', answer4: 'Shooting guard', answer5: 'Small Forward', correct: 4 , userChoice: 0},
  {question: 'Michael made a comeback in 2001. Which NBA team did he play for?', answer1: 'Chicago Bulls', answer2: 'Washington Wizards', answer3: 'Boston Celtics', answer4: 'Phoenix Suns', answer5: 'Los Angeles Lakers', correct: 2, userChoice: 0},
  {question: 'Which college team did Michael play for?', answer1: 'Duke', answer2: 'USC', answer3: 'North Carolina', answer4: 'University of Maryland', answer5: 'Memphis', correct: 3 , userChoice: 0},
  {question: 'How tall is Michael?', answer1: '6’1’’', answer2: '6’10’’', answer3: '6’6’’', answer4: '6’3’’', answer5: '6’11’’', correct: 3 , userChoice: 0},
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
      currentView = 1
        call renderQuestions();
        call renderQuizPage();
    // else if currentView === 1
      //   currentView = 2
      //   renderFeedback()
    //else if currentView === 2
     //if question===10 then currentView = 3
      //else currentView = 1
    //else if currentView === 3
      //currentView = 1
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
      STORE.currentQuestion++;
      console.log(currentQuestion);
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