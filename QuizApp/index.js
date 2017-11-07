/* global $ */
'use strict';

/******************************************************** 
Step 1: Define objects & database 
********************************************************/

const QUESTIONS = [
  {question: 'Which NBA team did Michael spend the majority of his career?', 
    answer1: 'Chicago Bulls', //map can loop through and randomize
    answer2: 'Washington Wizards', 
    answer3: 'Boston Celtics', 
    answer4: 'Phoenix Suns', 
    answer5: 'Los Angeles Lakers', 
    correct: 1, 
    userChoice: 0},
  {question: 'What position did he play?', 
    answer1: 'Point guard', 
    answer2: 'Center', 
    answer3: 'Power Forward', 
    answer4: 'Shooting guard', 
    answer5: 'Small Forward', 
    correct: 4 , 
    userChoice: 0},
  {question: 'Michael made a comeback in 2001. Which NBA team did he play for?', 
    answer1: 'Chicago Bulls', 
    answer2: 'Washington Wizards', 
    answer3: 'Boston Celtics', 
    answer4: 'Phoenix Suns', 
    answer5: 'Los Angeles Lakers', 
    correct: 2, 
    userChoice: 0},
  {question: 'Which college team did Michael play for?', 
    answer1: 'Duke', 
    answer2: 'USC', 
    answer3: 'University of North Carolina at Chapel Hill', 
    answer4: 'University of Maryland', 
    answer5: 'Memphis', 
    correct: 3 , 
    userChoice: 0},
  {question: 'How tall is Michael?', 
    answer1: '6’1’’', 
    answer2: '6’10’’', 
    answer3: '6’6’’', 
    answer4: '6’3’’', 
    answer5: '6’11’’', 
    correct: 3 , 
    userChoice: 0},
  {question: 'In the TV cartoon "ProStars", who co-starred with Michael?', 
    answer1: 'Ken Griffey Jr. & Barry Sanders', 
    answer2: 'Penny Hardaway & Shaquille O\'Neal', 
    answer3: 'Andre Agassi & Terrell Davis', 
    answer4: 'Bo Jackson & Wayne Gretzky', 
    answer5: 'Emmitt Smith & Hulk Hogan', 
    correct: 4, 
    userChoice: 0},  
  {question: 'In 2010, Michael became majority owner of which NBA team?', 
    answer1: 'Oklahoma City Thunder', 
    answer2: 'Houston Rockets', 
    answer3: 'Philadelphia 76ers', 
    answer4: 'Charlotte Bobcats', 
    answer5: 'Chicago Bulls', 
    correct: 4, 
    userChoice: 0},
  {question: 'Which of the following NBA players did NOT appear in the film Space Jam?', 
    answer1: 'Larry Bird', 
    answer2: 'Shawn Bradley', 
    answer3: 'Charles Barkley', 
    answer4: 'Muggsy Bogues', 
    answer5: 'Kobe Bryant', 
    correct: 5, 
    userChoice: 0},
  {question: 'What is Michael\'s career playoff scoring average?', 
    answer1: '30.12', 
    answer2: '29.57', 
    answer3: '33.45', 
    answer4: '35.05', 
    answer5: '29.93', 
    correct: 3, 
    userChoice: 0},
  {question: 'How many NBA Championships did Michael have?', 
    answer1: '6', 
    answer2: '10', 
    answer3: '4', 
    answer4: '8', 
    answer5: '3', 
    correct: 1, 
    userChoice: 0}];

const STORE = {
  currentQuestion: 0,
  userAnswers: [],
  // See if we can do without the rest.
  currentView: 0,
  currentRadioButtonChoice: 0,
  currentScore: 0,
  lastQuestionAnswered: 0,
  lastQuestionCorrect: false
};

/******************************************************** 
 * Step 2: Define functions that process user interaction 
 ********************************************************/

function renderPage() {
  console.log('In the renderPage() function.');  
  console.log(STORE.currentQuestion);
  if (STORE.currentQuestion === 0) {
    $('#js-userButton').text('START');
    $('div.js-pageView0HTML').show();
    $('div.js-pageView1HTML').hide();
    $('div.js-pageView2HTML').hide();
    $('div.js-pageView3HTML').hide();
    handleUserButton();
  }
  
  if (STORE.currentQuestion === 1) {
    $('#js-userButton').text('START');    
    renderQuestions();
    $('div.js-pageView0HTML').hide();
    $('div.js-pageView1HTML').show();
    $('div.js-pageView2HTML').hide();
    $('div.js-pageView3HTML').hide();
    handleUserButton();
  } else {
    return;
  }  
}

function pageViewLoop() {
  console.log('In the pageViewLoop() function.');
    // Set the currentView and what is next?
    // if (STORE.currentQuestion === 0) {
    //    renderQuestions();
    //    renderQuizPage();
    // }
    // } else if (STORE.currentView === 1) { // That is, we got here from page 1.
    //   //renderQuizPage();
    // }
    // else if currentView === 1
      //   currentView = 2
      //   renderFeedback()
    //else if currentView === 2
     //if question===10 then currentView = 3
      //else currentView = 1
    // else if (STORE.currentView === 3) {
    //   STORE.currentView = 0;

    //}
      //currentView = 0
      //call renderQuizResults()

}

/******************************************************** 
 * Step 3: Define event listeners
 ********************************************************/

function handleUserButton() {
  console.log('In the handleUserButton() function.');
  $('#js-userButton').on('click', function() {
    STORE.currentQuestion++;
    console.log(STORE.currentQuestion);
    renderPage();
  });
  //updates the STORE 
  //call respondToUserButton(){}
}


function handleRadioButtonClicked() {
  console.log('In the handleRadioButtonClicked() function.');
  $('.js-answer-choices').on('click',  function(event) {
    let selectedOption = event.currentTarget;
    console.log(selectedOption);
    STORE.currentRadioButtonChoice = selectedOption;
    console.log(STORE);
  });
}
//need to create variables for answer choices to update STORE, otherwise the class name will be the value
//update the STORE with current radio button choice


/******************************************************** 
* Utility housekeeping functions 
********************************************************/

function renderQuestions() {
  console.log('In the renderQuestions() function.');
    //only if the STORE is on pages that show questions
    $('#js-screenQuestion').text(QUESTIONS[STORE.currentQuestion-1].question);
    $('#js-choice1').text(QUESTIONS[STORE.currentQuestion-1].answer1);
    $('#js-choice2').text(QUESTIONS[STORE.currentQuestion-1].answer2);
    $('#js-choice3').text(QUESTIONS[STORE.currentQuestion-1].answer3);
    $('#js-choice4').text(QUESTIONS[STORE.currentQuestion-1].answer4);
    $('#js-choice5').text(QUESTIONS[STORE.currentQuestion-1].answer5);
    $('div.js-pageView1HTML').show();
    //respondToUserButton();
    //call handleRadioButtonClicked()
    //call handleUserButton();
}


function renderFeedback() {
    //get current userChoice
    //compare to correctAnswer
    //update currentscore if necessary
    //STORE['correctAnswer'] = userChoice === QUESTIONS[0].userChoice;
    $('#js-screenQuestion').text(QUESTIONS[STORE.currentQuestion-1].question);
    $('#js-correctAnswer').text(QUESTIONS[STORE.currentQuestion-1].correct);
    $('#js-userAnswer').text(QUESTIONS[STORE.currentQuestion-1].userChoice);
    $('div.js-pageView2HTML').show();
    //call handleUserButton()
}

function renderQuizResults() {
  console.log('`renderQuizResults` ran');
  //generateHTML() --> loop through questions using map and compare last two fields
  //renderQuizPage
    
}

function renderQuizPage() {
  console.log('In the renderQuizPage() function.');
  console.log(STORE.currentView);
    // Set up the user button, which is always visible.
  switch (STORE.currentView) {
    case 0: 
      $('#js-userButton').text('START');
      $('div.js-pageView0HTML').show();
      $('div.js-pageView1HTML').hide();
      $('div.js-pageView2HTML').hide();
      $('div.js-pageView3HTML').hide();
      break;
    case 1: 
      $('#js-userButton').html('ENTER');
      $('div.js-pageView0HTML').hide();
      $('div.js-pageView1HTML').show();
      $('div.js-pageView2HTML').hide();
      $('div.js-pageView3HTML').hide();
      break;
    case 2: 
      $('#js-userButton').html('CONTINUE');
      $('div.js-pageView0HTML').hide();
      $('div.js-pageView1HTML').hide();
      $('div.js-pageView2HTML').show();
      $('div.js-pageView3HTML').hide();
      break;
    case 3: 
      $('#js-userButton').html('PLAY AGAIN?');
      $('div.js-pageView0HTML').hide();
      $('div.js-pageView1HTML').hide();
      $('div.js-pageView2HTML').hide();
      $('div.js-pageView3HTML').show();
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
  <img src="jordandunk.jpg" class="js-splash-page-dunk" alt="Michael Jordan dunking the ball from the free throw line">
  <br/>
  <br/>
  <br/>
  <br/>`;
  $('div.js-pageView0HTML').html(quizHeader);
  $('div.js-pageView0HTML').hide();

  // Set up Page 1, then hide it.

  let quizQuestionsHTML = `
    <div id='js-scoreBox'>Score: ${STORE.currentScore} of ${QUESTIONS.length}</div>
    <h3>Question ${STORE.currentQuestion+1} of ${QUESTIONS.length}:</h3>
      <div id='js-screenQuestion'></div>
      <div class='js-radioButton'>
       <input type='radio' name='choices' value=1>
        <label for='choice1' id='js-choice1'></label><br/>
        
        <input type='radio' name='choices' value=2>
        <label for='choice1' id='js-choice2'></label><br/>
        
        <input type='radio' name='choices' value=3>
        <label for='choice1' id='js-choice3'></label><br/>
        
        <input type='radio' name='choices' value=4>
        <label for='choice1' id='js-choice4'></label><br/>
        
        <input type='radio' name='choices' value=5>
        <label for='choice1' id='js-choice5'></label><br/>
      </div>
    <br/>
    <br/>
    <br/>
  `;
  // NOTE: The question and the five choices will be inserted in the correct places above, in renderQuestions().
  $('div.js-pageView1HTML').html(quizQuestionsHTML);
  $('div.js-pageView1HTML').hide();

  // Set up Page 2, then hide it.

  let quizFeedbackHTML = `
    <div id='js-scoreBox'>Score: ${STORE.currentScore} of ${QUESTIONS.length}</div>
    <h3>Question ${STORE.currentQuestion+1} of ${QUESTIONS.length}:</h3>
      <div id='js-feedBackImage'></div>
      <div id='js-screenQuestion'></div>
      <div id='js-correctAnswer'></div>
      <div id='js-userAnswer'></div>
    <br/>
    <br/>
    <br/>
  `;
  $('div.js-pageView2HTML').html(quizFeedbackHTML);
  $('div.js-pageView2HTML').hide();
}

/******************************************************** 
 * Step 4: Main function which calls all the others 
 ********************************************************/ 

//  function main() {}
function handleQuiz(){
  console.log('In the handleQuiz() function.');
  generateHTML();
  renderPage();
}


// Start the main loop when the web page finishes loading.
$(function(){
  handleQuiz();
});