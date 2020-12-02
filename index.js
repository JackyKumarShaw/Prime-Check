var input = require('readline-sync');
var color = require('chalk');
var math= require('mathjs')

var userName=input.question(color.yellow.bold("What's you name?\n"));

console.log(color.bgCyanBright.bold.black.underline("Hello! "+userName+" Let's find out whether your birth day is PRIME or not!\n"));

function ask(){
  var userName=input.question(color.green.bold("Enter your date of birth in the format DD/MM:"));
  const dob=userName.split('/');
  return dob[0];
}

day=ask();
check(day);

function check(day) {
  if(isNaN(parseInt(day))){
    console.log(color.redBright("Please Enter valid date of birth!!"));
    day=ask();
    check(day);
  }
  else{
    for(var i=2; i<=math.sqrt(day);i++){
      if(day%i===0){
        console.log(color.yellow.bold("\n"+userName+"! Your birth day "+day+" is not a Prime Number!"));
        console.log(color.bgCyanBright.bold.black("\nThank You! " + userName + " for trying this! You can share the screenshot of the result in your social media if you want!"));
        process.exit();
      }
    }
    console.log(color.yellow.bold("\n"+userName+"! Your birth day "+day+" is a Prime Number!"));
    console.log(color.bgCyanBright.bold.black("\nThank You! " + userName + " for trying this! You can share the screenshot of the result in your social media if you want!"));
  }
}
