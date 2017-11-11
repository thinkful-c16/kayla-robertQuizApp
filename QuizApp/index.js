/* global $ */
'use strict';

/******************************************************** 
Step 1: Define objects & database 
********************************************************/

const QUESTIONS = [
  {question: 'What position did he play?', 
    answers: ['Point guard', 'Center', 'Power Forward', 'Shooting guard', 'Small Forward'], 
    correctAnswer: 'Small Forward'},
  {question: 'Jordan made a NBA omeback in 2001. Which team did he play for?', 
    answers: ['Chicago Bulls', 'Washington Wizards', 'Boston Celtics', 'Phoenix Suns', 'Los Angeles Lakers'],
    correctAnswer: 'Washington Wizards'},
  {question: 'In 2010, Michael became majority owner of which NBA team?', 
    answers: ['Oklahoma City Thunder', 'Houston Rockets', 'Philadelphia 76ers', 'Charlotte Bobcats', 'Chicago Bulls'], 
    correctAnswer: 'Charlotte Bobcats'},
  {question: 'Which of the following NBA players did NOT appear in the film Space Jam?', 
    answers: ['Larry Bird', 'Shawn Bradley', 'Charles Barkley', 'Muggsy Bogues', 'Kobe Bryant'],
    correctAnswer: 'Kobe Bryant'},
  {question: 'How many NBA Championships did Michael have?', 
    answers: ['6', '10', '4', '8', '3'],
    correctAnswer: '6'}];

const STORE = {
  currentQuestionIndex: null,
  userAnswer: [],
  currentView: 'start',
  currentScore: 0,

};

/**********/
//STEP 1: RENDER
//**********/

function render() {
  if (STORE.currentView === 'start') {
    $('.intro').show();
    $('.questions').hide();
    $('.feedback').hide();
    $('.score').hide();
    $('.outro').hide();

  } 
  else if (STORE.currentView === 'questions') {
    $('.intro').hide();
    $('.questions').show();
    $('.feedback').hide();
    $('.score').show();
    $('.outro').hide();

  }
  else if (STORE.currentView === 'feedback') {
    $('.intro').hide();
    $('.questions').show();
    $('.feedback').show();
    $('.score').show();
    $('.outro').hide();

  } else if (STORE.currentView === 'results') {
    $('.intro').hide();
    $('.questions').hide();
    $('.feedback').hide();
    $('.score').hide();
    $('.outro').show();
  }
}

  //render with appropriate HTML elements based on currentView
  //if 'intro'
  //if 'questions' then questions
  //if 'feeback' then feedback
//   $('main').html(generateTemplate('questions'));

// }

/*****/
//Template generators//
/*** */

function generateTemplate(currentView, currentQuestionIndex) {
  console.log('`generateTemplate` ran');
  if (currentView === 'start') {
    return `<h1>His Airness, Michael Jordan:<br> How much do you know?</h1>
    <img src='jordandunk.jpg' alt='Michael Jordan dunking the basketball from free throw line'>
    <input type='button' value='Start Quiz'>;
    `;
  }
  if (currentView === 'questions') {
    return `<div class='js-questions' 'js-question-item-${currentQuestionIndex}>${QUESTIONS[currentQuestionIndex].question}</div<br>
    <div class='js-question-answer-choices'>
      <input type='radio' name='choices' value=${QUESTIONS[currentQuestionIndex].answers[0]}>
      <label for='choice1' id='js-choice1'></label><br/>
      <input type='radio' name='choices' value=${QUESTIONS[currentQuestionIndex].answers[1]}>
      <label for='choice1' id='js-choice2'></label><br/>
      <input type='radio' name='choices' value=${QUESTIONS[currentQuestionIndex].answers[2]}>
      <label for='choice1' id='js-choice3'></label><br/>
      <input type='radio' name='choices' value=${QUESTIONS[currentQuestionIndex].answers[3]}>
      <label for='choice1' id='js-choice4'></label><br/>
      <input type='radio' name='choices' value=${QUESTIONS[currentQuestionIndex].answers[4]}>
      <label for='choice1' id='js-choice5'></label><br/>
      <div><<input type='button' value='Enter'>;
    </div>Question ${currentQuestionIndex+1} of ${QUESTIONS.length}</div>
    <div>${QUESTIONS.correctAnswer}</div>
    `;
  }
  if (STORE.currentView === 'questions') {
    return `<div class='js-feedback'<p>Sorry, wrong answer!</p></div>
    `;

  }
}

/**********/
//STEP 2: EVENT LISTENERS(USER INPUT)
/*********/

function handleQuizStart() {
  changeView('start');
  $('.js-userButton').on('click', '.js-the-button', function(e) {
    e.preventDefault();
    console.log('`handleQuizStart` ran');
    changeView('questions');
    // console.log(STORE);
    render();
  });

}

function handleAnswerSubmitted() {
  $('.js-userButton').on('click', '.js-the-button', function(e) {
    e.preventDefault();
    const answer = $('input[name=choices]:checked').val();
    STORE.userAnswer.push(answer);
    checkAnswer(answer);
    $('input[type=radio]').prop('checked',false);
    STORE.currentQuestionIndex++;
    changeView('questions');
    render();    
  });
}


/***************/
//STEP 3: STATE CHANGE FUNCTIONS(STORE)
/**************/


function getQuestionIndex() {
  const questionIndex = QUESTIONS.map(function(question, index) {
    console.log(question.question, index);
  });
}

console.log(getQuestionIndex);

// value['question']);
// generateTemplate(questionIndex);
// {
//   generateTemplate(question, currentQuestionIndex); 
// });

  
// function getAnswerIndex() {
//   const answers = QUESTIONS[currentQuestionIndex].answers.map(value => value)
//   }
//   return answers;
//   //access currentQuestionIndex.answers is an array
// //map and return the label and input
// //${QUESTIONS[currentQuestionIndex].answers
// }

function changeView(view) {
  STORE.currentView = view;
  //grab from event handler
}

function renderQuestions(){}

function checkAnswer(userAnswer){
  //if userAnswer === QUESTIONS.correctAnswer, 
  // const correctAnswer = QUESTIONS.map(function(answer, index))
}

//**********/
//STEP 0: INITIALIZATION
//*********/

$(document).ready(function() {
  render();
  handleQuizStart();
  handleAnswerSubmitted();

});


