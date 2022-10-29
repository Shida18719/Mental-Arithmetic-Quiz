// Get the HTML Elements by their Tag Name and assigned to variable
// Start Quiz Section
const startQuiz = document.getElementById('start-quiz-home');
const userNameInput = document.getElementById("user-name-input");
const nextBtn = document.getElementById("next-btn");
const errorMsg = document.getElementById("error");
let playerName  =  userNameInput.value;
const playerNameTxt = document.getElementById("player-name");

// Quiz Rule Box Section
const ruleBox = document.getElementById('rule-box');
const startBtn = document.getElementById('start-quiz-btn');
const backHome = document.getElementById("back-home-btn");

// Select Level of Difficulty Section
const selection = document.getElementById("selection-area");
const selectLevel = document.getElementsByClassName("difficulty");
const level1 = document.getElementById("difficulty-level1");
const level2 = document.getElementById("difficulty-level2");
const level3 = document.getElementById("difficulty-level3");
const homeBtn = document.getElementById("home-btn");

// Questions Section
const questionBox = document.getElementById("question-box-area");
const questionsCounter = document.getElementById("questions-counter");
const questionsText = document.getElementById("questions-txt");
const timeCounter = document.getElementById("time-counter");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");

// Answer options Section
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const optionBtn = document.getElementsByClassName("option-btn");

// Next question button
const nextQueBtn = document.getElementById("next-ques-btn");

// Result Section
const quizResult = document.getElementById("quiz-result");
const resultText = document.getElementById("result-text");
const replayQuiz = document.getElementById("replay");
const quitQuiz = document.getElementById("quit");

/** Function to Check UserName input and display error message if invalid or empty
  User name display when the next button is clicked */ 
window.addEventListener('DOMContentLoaded', () => { 
nextBtn.addEventListener("click", function() {

    playerName = userNameInput.value;
    // selection.innerHTML = userNameInput.value;
    // questionsArea.innerHTML = userNameInput.value;
    playerNameTxt.innerHTML = userNameInput.value;
    // console.log(userNameInput.value);

    let errorTxt = '';
    // if username input is empty
if (playerName == '') {
    errorTxt = "Please enter a Username";

// if username input is less than 8 characters 
} else if (playerName.length <= Number(6)) {
    errorTxt = "Username must have maximum of 8 characters";
} 
// if errorMsg is not empty
if (errorTxt !== '') {
    // display error message in the errorMsg div on home page
    
    errorMsg.innerHTML = errorTxt;
} else{
    // nextBtn.click();  
    startQuiz.classList.add('hide');
}
// console.log(errorTxt);

// Redirect user to rule box when next button is clicked
   if (ruleBox.style.display !== "none") {
    ruleBox.style.display = "block";
   }else {
    ruleBox.style.display = "none";
  }
 });

 });
// Redirect user to quiz level selection box when start quiz button is clicked
 startBtn.addEventListener("click", function(){
    ruleBox.style.display = "none";
    selection.style.display = "block"; //show difficulty level box
 });

 // Redirect user to question page for each level when a level is selected 
    level1.addEventListener("click", function(){
    selection.style.display = "none";      //hide level selection box
    questionBox.style.display = "block";   //show question box
 });

 level2.addEventListener("click", function(){
    selection.style.display = "none";
    questionBox.style.display = "block"; //show question box
 });

 level3.addEventListener("click", function(){
    selection.style.display = "none";
    questionBox.style.display = "block"; //show question box
 });

// Redirect user to home page when home button is clicked on the difficulty level page
    homeBtn.addEventListener("click", function(){
    selection.style.display = "none";
    startQuiz.style.display = "block";
 });

 // Redirect user to home page when home button is clicked on the quiz rule box
    backHome.addEventListener("click", function(){
    ruleBox.style.display = "none";
    startQuiz.style.display = "block";
    });


    
    let timer = 0;
    let interval = 0; 
    let index = 0;
    let score = 0;
    let userAnswer = undefined;

    //  Set function for time count down
    let countDown = ()=> {
      if (timeCounter === 25) {
        clearInterval(interval);
      } else {
        timeCounter++;
        console.log(timeCounter);
      } 
    }

    // Set variable to Index and empty Array  
    let questionsCounterIndex = 0;
    let questionNum = 1;
    let currentQuestion;
    let selectedQuestions = [];
    let quiz;

    let shuffledQuestions;

    function displayQuestionsLevel(){
    //  let filteredQuestionsByDifficulty = questions.filter(question => question.difficulty === selectLevel);
    //  selectLevel = filteredQuestionsByDifficulty;

    // Set Question counter
     questionsCounter.innerHTML = "Question " + (questionsCounterIndex + 1) + " of " +
     quiz.length;

    let randomQuestions = Math.floor(Math.random() * quiz.length );
    currentQuestion = quiz[randomQuestions];

    quiz.splice(randomQuestions, 1);

    questionsText.innerHTML = currentQuestion.question

    shuffledQuestions = quiz.sort(() => Math.random() - .5);

    for(let i = 0; i < currentQuestion.options.length; i++){
        optionBtn[i].innerHTML = currentQuestion.options[i];
        optionBtn.addEventListener("click", function() {
        
     });
        
    }

     if (selectLevel == 'level1') {
        shuffledQuestions = questionsLevel1;
    } else if (selectLevel == "level2") {
        shuffledQuestions= questionsLevel2;
    } else if (selectLevel == "level3") {
        shuffledQuestions= questionsLevel3;
    }   else {
        shuffledQuestions = randomQuestions;
        }

        setNextQuestions();
    };

    function difficultyL1Questions() {
        quiz = questionsLevel1;
        displayQuestionsLevel();


    };

    function difficultyL2Questions(){};

    function difficultyL3Questions(){};
    
    function setNextQuestions(){
        displayQuestionsLevel(shuffledQuestions[currentQuestion]);
    };


    // nextQueBtn.addEventListener("click", function() { 
    //             }
    //         });














// Function that loops through questions then Push questions into the selectedQuestions Array
    // function availableQuestions() {
    //     // const totalQuestions = quiz.length
    //     for(let i = 0; i< quiz.length; i++) {
    //         selectedQuestions.push(quiz[i]) 
    //     }
    //     console.log(selectedQuestions);
    // }

    // // Set Questions Counter and display random Questions
    // function selectRandomQuestions(){
    //     // Set Question counter
    //     questionsCounter.innerHTML = "Question " + (questionsCounterIndex + 1) + " of " +
    //     quiz.length;
    //     // Set Question text
    //     const randomQuestions = selectedQuestions[Math.floor(Math.random() * selectedQuestions.length)];
    //     currentQuestion = randomQuestions;
    //     questionsText.innerHTML = currentQuestion.questions-txt;
    //     console.log(randomQuestions);
    // }












//     // Function that loops through questions then Push questions into the selectedQuestions Array
//     function availableQuestions() {
//         // const totalQuestions = quiz.length
//         for(let i = 0; i< quiz.length; i++) {
//             selectedQuestions.push(quiz[i]) 
//         }
//         console.log(selectedQuestions);
//     }

//     // Set Questions Counter and display random Questions
//     function selectRandomQuestions(){
//         // Set Question counter
//         questionsCounter.innerHTML = "Question " + (questionsCounterIndex + 1) + " of " +
//         quiz.length;
//         // Set Question text
//         const questionsIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
//         currentQuestion = questionsIndex;
//         questionsText.innerHTML = currentQuestion.questions-txt;
//         console.log(questionsIndex);

//         // Index number of questions in the availableSelections Array
//         const indexNum = availableQuestions.indexOf(questionsIndex);

//         // Remove the questionsIndex from the availableSelections Array, so the question is not repeated
//         availableQuestions.splice(indexNum, 1);

//         // Set the options, loop through options Array and push it into the availabeOptions Array 
//         const optionLen = currentQuestion.options.length;
//         for(let i = 0; i < optionLen; i++){
//             availableOptions.push(i);
//         }
//         // Set random Options and Append options container to the available options
//         // First loop through the options
//         for(let i = 0; i < optionLen; i++){
//             const randOption = availableOptions[Math.floor(Math.random() * availableOptions.length)];
//             const optionIndex = availableOptions.indexOf(randOption);
//         // Remove the OptionIndex from the availableOptions Array, so the option is not repeated
//             availableOptions.splice(optionIndex, 1);
//             const option = document.getElementsByClassName("option-btn");
//             option.innerHTML = currentQuestion.options[randOption];
//             // option = currentQuestion.options[i];
//             option = i;
//             option.appendChild(option);
//         }
    
//         questionsCounterIndex++;
//         console.log(indexNum);
//     }

//     const nextQuestionBtn = document.getElementById("next-ques-button");

//     nextQueBtn.addEventListener("click", function() {
//         if (questionsCounter === quiz.length){
//             console.log("finish quiz");
//         }
//         else{
//             selectNewQuestions();  
//         }
//     });


//       window.onload = ()=> {
//     //     Set all questions in  selectedQuestions Array
//          availableQuestions();

//     // // Call the selectNewQuestions function's function
//          selectNewQuestions();

//      };

//     // Function to randomly display quiz with level of diffivulty
//     function difficultyL1() {
//         quiz = questionsLevel1;
//         difficultyEasy.addEventListener("click", () =>{
//         selectedLevel = document.getElementsByClassName("difficulty");

// // let filteredQuestionsByDifficulty = questions.filter(question => question.difficulty === selectedLevel);

        
//     });
// }

// // function showResults(){};
// // function runQuiz() {
// //     startQuiz.classList.add('hide');
// //     ruleBox.classList.add.remove('hide');
// //     selection.classList.remove('hide')
// // };
//  // homeBtn.onclick = ()=>{
//     //     window.location.reload(); //reload the current window
    // };