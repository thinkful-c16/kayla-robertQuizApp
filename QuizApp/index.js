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
    // $('.intro').show();
    $('.js-quiz-container').html(introTemplate);
    $('.questions').hide();
    $('.feedback').hide();
    $('.score').hide();
    $('.outro').hide();

  } 
  else if (STORE.currentView === 'questions') {
   
    $('.js-quiz-container').html(questionTemplate);
    $('.intro').hide();
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
    if (STORE.userAnswer === QUESTIONS.correctAnswer) {
      $('.js-feedback').html(correctAnswerTemplate);
    } else {
      $('.js-feedback').html(wrongAnswerTemplate);
    }

  } else if (STORE.currentView === 'results') {
    $('.intro').hide();
    $('.questions').hide();
    $('.feedback').hide();
    $('.score').hide();
    $('.outro').show();
  }
}

/*******/
//Template generators//
/*****/

const introTemplate = function() {
  return `<h1>His Airness, Michael Jordan:<br> How much do you know?</h1>
    
    <input type='button' class='js-the-button' value='Start Quiz'>`;
};

{/* <img src='jordandunk.jpg' alt='Michael Jordan dunking the basketball from free throw line'> */}

const correctAnswerTemplate = function() {
  return `
  <div class='js-feedback><p>Correct!</p></div>
  `;
};

const wrongAnswerTemplate = function() {
  return `
  <div class='js-feedback><p>Correct!</p></div>
  `;
};

// const scoringTemplate = function() {
//   return `
//     </div>Question ${currentQuestionIndex+1} of ${QUESTIONS.length}</div>
//     <div>${QUESTIONS.correctAnswer}</div>`;
// };


const questionTemplate = function() {
  return `<div class='js-questions' 'js-question-item-${QUESTIONS[STORE.currentQuestionIndex]}>${QUESTIONS[STORE.currentQuestionIndex].question}</div<br>
  <div class='js-answer-choices'>
  <form class='js-answerSelected'>
    <input type='radio' name='choices' id='js-choice1' value='${QUESTIONS[STORE.currentQuestionIndex].answers[0]}'>
    <label for='choice1' id='js-choice1'></label><br/>
    <input type='radio' name='choices' value=${QUESTIONS[STORE.currentQuestionIndex].answers[1]}>
    <label for='choice1' id='js-choice2'></label><br/>
    <input type='radio' name='choices' value=${QUESTIONS[STORE.currentQuestionIndex].answers[2]}>
    <label for='choice1' id='js-choice3'></label><br/>
    <input type='radio' name='choices' value=${QUESTIONS[STORE.currentQuestionIndex].answers[3]}>
    <label for='choice1' id='js-choice4'></label><br/>
    <input type='radio' name='choices' value=${QUESTIONS[STORE.currentQuestionIndex].answers[4]}>
    <label for='choice1' id='js-choice5'></label><br/>
  </form>
    <input type='button' class='js-the-button' value='Enter'>
  `;
};

{/* <button type="submit" class="search-button">Search</button> */}
{/* <input type='button' class='js-the-button' value='Enter'>; */}


/**********/
//STEP 2: EVENT LISTENERS(USER INPUT)
/*********/

function handleQuizStart() {
  changeView('start');
  $('.js-quiz-container').on('click', '.js-the-button', function(e) {
    e.preventDefault();
    console.log('firing?');
    changeView('questions');
    STORE.currentQuestionIndex = 0;
    // getQuestionIndex();
    render();
  });

}

function handleCurrentQuestions() {
  if (STORE.currentQuestionIndex < QUESTIONS.length) {
    STORE.currentQuestionIndex++;
    render();
    handleAnswerSubmitted();
  } else {
    handleQuizStart();
  }

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
//STEP 3: Helper Functions
/**************/


function getQuestionIndex() {
  const questionsMapped = QUESTIONS.map(function(question) {
    return question['question'];
  });
  console.log(questionsMapped);
  questionTemplate(questionsMapped);
  // return questionsMapped;
}


function changeView(view) {
  STORE.currentView = view;
  //grab from event handler
}


function checkAnswer(userAnswer){
  if (userAnswer === QUESTIONS[STORE.currentQuestionIndex-1]['correctAnswer']) {
    render();
  }

}

//**********/
//STEP 0: INITIALIZATION
//*********/

$(document).ready(function() {
  render();
  handleQuizStart();
  handleAnswerSubmitted();
  handleCurrentQuestions();

});


