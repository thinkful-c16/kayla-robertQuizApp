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
  quizQuestionsHTML: '',
  quizSummaryHTML: ''
};

/******************************************************** 
 * Step 2: Define functions that process user interaction 
 ********************************************************/

function respondToUserButton() {
  console.log('In the respondToUserButton() function.');
    //Set the currentView and what is next?
    renderQuizPage();
    if (STORE.currentView === 0) { // That is, we got here from page 0.
      STORE.currentView = 1;
      renderQuestions();
    } else if (STORE.currentView === 1) { // That is, we got here from page 1.
      //renderQuizPage();
    }
    // else if currentView === 1
      //   currentView = 2
      //   renderFeedback()
    //else if currentView === 2
     //if question===10 then currentView = 3
      //else currentView = 1
    else if (STORE.currentView === 3) {
      STORE.currentView = 0;

    }
      //currentView = 0
      //call renderQuizResults()


}

/******************************************************** 
 * Step 3: Define event listeners
 ********************************************************/

function handleUserButton() {
  console.log('In the handleUserButton() function.');
    //Set the currentView and what is next?
    //wait on user to click -->
    //call the function that does stuff
    //updates the STORE 
    respondToUserButton();
}


function handleRadioButtonClicked() {
    //wait on user to click 
    //update the STORE with current radio button choice

}

/******************************************************** 
* Utility housekeeping functions 
********************************************************/

function renderQuestions() {
  console.log('In the renderQuestions() function.');
    //only if the STORE is on pages that show questions
      STORE.currentQuestion++;

    // Set up Page 1, then hide it.

    STORE.quizQuestionsHTML = `
      <div id='js-scoreBox'>Score: ${STORE.currentScore} of ${QUESTIONS.length}</div>
      <h3>Question ${STORE.currentQuestion} of ${QUESTIONS.length}:</h3>
        <div class='js-screenQuestion'>${QUESTIONS[STORE.currentQuestion-1].question}</div>
        <div class='js-radioButton'>
         <input type='radio' id='choice1' name='choices' value=1>
          <label for='choice1'>${QUESTIONS[STORE.currentQuestion-1].answer1}</label><br/>

          <input type='radio' id='choice2' name='choices' value=2>
         <label for='choice1'>${QUESTIONS[STORE.currentQuestion-1].answer2}</label><br/>
  
         <input type='radio' id='choice3' name='choices' value=3>
          <label for='choice1'>${QUESTIONS[STORE.currentQuestion-1].answer3}</label><br/>

         <input type='radio' id='choice4' name='choices' value=4>
          <label for='choice1'>${QUESTIONS[STORE.currentQuestion-1].answer4}</label><br/>

          <input type='radio' id='choice5' name='choices' value=5>
          <label for='choice1'>${QUESTIONS[STORE.currentQuestion-1].answer5}</label><br/>
        </div>
    <br/>
    <br/>
    <br/>
  `;
  $('div.js-pageView1HTML').html(STORE.quizQuestionsHTML);
  $('div.js-pageView1HTML').hide();
      renderQuizPage();
      $('div.js-pageView1HTML').show();
      respondToUserButton();

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
  console.log('In the renderQuizPage() function.');
    // Set up the user button, which is always visible.
  switch (STORE.currentView) {
    case 0: $('#js-userButton').text('START');
      break;
    case 1: $('#js-userButton').html('ENTER');
      break;
    case 2: $('#js-userButton').html('CONTINUE');
      break;
    case 3: $('#js-userButton').html('PLAY AGAIN?');
      break;
  }
  generateHTML();
  if(STORE.currentView === 0){  // We are in page 0.
    $('div.js-pageView0HTML').show();
  }    
  switch (STORE.currentView) {
    case 0: $('div.js-pageView0HTML').show();
      break;
    case 1: $('div.js-pageView1HTML').show();
      break;
    case 2: $('div.js-pageView2HTML').show();
      break;
    case 3: $('div.js-pageView3HTML').show();
      break;
  }
}

function generateHTML() {
  console.log('In the generateHTML() function.');

  // Set up Page 0, then hide it.

  let quizHeader = `<h1>Welcome to our<br/>
  Michael Jordan<br/>
  quiz!<br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>`;
  $('div.js-pageView0HTML').html(quizHeader);
  //$('div.js-pageView0HTML').hide();



}

/******************************************************** 
 * Step 4: Main function which calls all the others 
 ********************************************************/ 

//  function main() {}
function handleQuiz(){
  console.log('In the handleQuiz() function.');
  handleUserButton();
}


// Start the main loop when the web page finishes loading.
$(function(){
  handleQuiz();
  //handleAnswerSubmitted();
});