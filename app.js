'use strict';
gameStart();

function gameStart(){
  var userName = prompt('Hi there, What is your name?');
  var questions = ['if williams was building a team would he draft Lebron James?', 'if williams house was on fire and he had to choose between saving his dog or his books, would he save his dog?', 'if williams was stressed at work, would he drink coffee?', 'if williams was going to pick up his mum and wife at the same location. Would he let his mum sit in the front seat?', 'if the world cup finals was showing the same time the nba finals was showing, will williams watch the pick the nba finals over the world cup finals?'];

  var correctAnswers = [true, false, true, false, true];
  var yesAnswers = ['yes', 'y'];
  var noAnswers = ['no', 'n'];
  var userAnswer = [];
  var count = 0;

  for(var i =0; i < 5; i++)
  {
    userAnswer[i] = prompt(questions[i]);
    console.log('the user is asked "' + questions[i] + '" and the user responded with "' + userAnswer[i] + '"');
    if((userAnswer[i].toLowerCase()) === yesAnswers[0] || (userAnswer[i].toLowerCase()) === yesAnswers[1])
    {
      if(correctAnswers[i])
      {
        alert('Congratulatons!!! ' + userName +'. You are correct');
        count++;
      }
      else{
        alert('awww. Wrong answer ' + userName + '. You\'ll get em next time champ');
      }
    }
    else if((userAnswer[i].toLowerCase()) === noAnswers[0] || (userAnswer[i].toLowerCase()) === noAnswers[1])
    {
      if(!correctAnswers[i])
      {
        alert('Congratulatons!!! ' + userName +'. You are correct');
        count++;
      }else{
        alert('awww. Wrong answer ' + userName + '. You\'ll get em next time champ');
      }
    }
    else
    {
      alert('ummm. what is you doing ' + userName + '?? You can only answer yes/no or y/n. Try another question');
    }
  }
  document.getElementById('gameSummary').innerHTML = 'Thanks for playing my game ' + userName + '. You got '+ count + ' out of 5 amswers correct';
}
