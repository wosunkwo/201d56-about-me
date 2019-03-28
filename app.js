'use strict';

//functions
//this creates an array to store all the questions i am going to ask the user
var questions = ['if williams was building a team would he draft Lebron James?', 'if williams house was on fire and he had to choose between saving his dog or his books, would he save his dog?', 'if williams was stressed at work, would he drink coffee?', 'if williams was going to pick up his mum and wife at the same location. Would he let his mum sit in the front seat?', 'if the world cup finals was showing the same time the nba finals was showing, will williams watch the pick the nba finals over the world cup finals?', 'what is williams favorite basketball players jersey number?', 'can you guess a state I have been to apart from Washington'];
var correctAnswers = [true, false, true, false, true, 30, ['oklahoma', 'new jersey','texas','missouri','florida','new york', 'minnesota','louisiana']];
var yesAnswers = ['yes', 'y'];
var noAnswers = ['no', 'n'];
var userAnswer = [];
var count = 0;
var numOfTrys;
var userName;

gameStart();

//starts game
function gameStart(){
  //this asks the user for his/her name and stores it
  userName = prompt('Hi there, What is your name?');

  for(var i =0; i < questions.length; i++){
    userAnswer[i] = prompt(questions[i]);
    console.log('the user is asked "' + questions[i] + '" and the user responded with "' + userAnswer[i] + '"');
    if(userAnswer[i] !== null){
      //for the seventh question
      if(i === 6){
        questionSix(i);
        //for the sixth question
      } else if(i === 5){
        questionFive(i);
        //for the first to fifth question
      }else {
        questionsOneToFive(i);
      }
      document.getElementById('gameSummary').innerHTML = 'Thanks for playing my game ' + userName + '. You got '+ count + ' out of ' + questions.length + ' questions correct';
    }
  }
}

//logic for questions 1 to 5
function questionsOneToFive(i) {
  var validity;
  if(yesAnswers.includes(userAnswer[i].toLowerCase())){
    if(correctAnswers[i]){
      validity = 'correct';
      count += 1;
    }
    else{
      validity = 'incorrect';
    }
  }
  else if(noAnswers.includes(userAnswer[i].toLowerCase())){
    if(!correctAnswers[i]){
      validity = 'correct';
      count += 1 ;
    }else{
      validity = 'incorrect';
    }
  }
  else{
    validity = 'invalid';
    alert('ummm. what is you doing ' + userName + '?? You can only answer yes/no or y/n. Try another question');
  }
  messageToUser(validity);
}

//helper function - sends back correct alert message depending on validity of response
function messageToUser(validity) {
  if(validity === 'correct') {
    return;
  } else if (validity === 'incorrect') {
    return;
  } else {
    return;
  }
}

//logic for question 6 - in this case, i === 5
function questionFive(i) {
  numOfTrys = 4;
  while(userAnswer[i] !== correctAnswers[i] && numOfTrys > 1){
    console.log('user answer is = ' + userAnswer[i] + ' the correct answer is = '+ correctAnswers[i]);
    console.log('THE TYPE OF USER ANSWER = ' + typeof userAnswer[i]);
    console.log('THE TYPE OF CORRECT ANSWER = ' + typeof correctAnswers[i]);
    if(Number(userAnswer[i]) === correctAnswers[i]){
      console.log('I got in here');
      alert('Congratulations ' + userName + ' you are correct. Wow lucky guess haha!!!');
      count+=1;
      numOfTrys = 0;
    }else if(Number(userAnswer[i]) < correctAnswers[i]){
      numOfTrys -= 1;
      alert('awww. Wrong answer ' + userName + ' your answer is too low. You have ' + numOfTrys + ' tries left');
      userAnswer[i] = prompt(questions[i]);
    }else if(Number(userAnswer[i]) > correctAnswers[i]) {
      numOfTrys -= 1;
      alert('awww. Wrong answer ' + userName + ' your answer is too high. You have ' + numOfTrys + ' tries left');
      userAnswer[i] = prompt(questions[i]);
    }else{
      numOfTrys-=1;
      alert('yoo!! '+ userName + ' you have to guess a NUMBER. ' + ' You have '+ numOfTrys + ' tries left');
      userAnswer[i] = prompt(questions[i]);
    }
  }
  if(Number(userAnswer[i]) === correctAnswers[i] && numOfTrys === 1){
    alert('Correct!! '+ userName + ' you are right. Good job');
    count += 1;
  }else if (numOfTrys === 1){
    alert('you have used up all your tries. Sorry maybe next time');
  }
}

//logic for question 7 - in this case, i === 6
function questionSix(i) {
  numOfTrys = 6;
  while(!(correctAnswers[i].includes(userAnswer[i].toLowerCase())) && numOfTrys > 1){
    numOfTrys -= 1;
    alert('wrong answer, you have '+ numOfTrys +' tries left.');
    userAnswer[i] = prompt(questions[i]);
    console.log('the user is asked "' + questions[i] + '" and the user responded with "' + userAnswer[i] + '"');
  }
  if(numOfTrys <= 1){
    alert('you have used up all your tries. Sorry maybe next time.' + ' The correct answers are: '+ correctAnswers[i]);
  }else{
    alert('Correct!! '+ userName + ' you are right. Good job.' + ' The options were: '+ correctAnswers[i]);
    count+=1;
  }
}
