var buttonColours=["red", "blue","green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
function nextSequence()
{
  level++;
  console.log(level);
  $("h1").text("Level  "+level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour= buttonColours[randomNumber];
  gamePattern.push(randomChosenColour)
  var chosenColor="#"+randomChosenColour;
  $(chosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  console.log("gamePattern"+gamePattern);
  animatePress(randomChosenColour);
  userClickedPattern=[];
}

$(".btn").on("click", function ()
{
var userChosenColour= this.id;
userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
console.log("userClickedPattern"+userClickedPattern);
animatePress(userChosenColour);
if(userClickedPattern.length==gamePattern.length)
{checkAnswer(level);}
// checkAnswer(level);

})
function playSound(color)
{
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}
function animatePress(currentColour)
{
  $("#"+currentColour).addClass("pressed");
  setTimeout(function()
  {
  $("#"+currentColour).removeClass("pressed");}, 100);
}
// if(level===0)
// {
//   console.log(level);
if(level==0){
  $(document).one("keypress",function ()
  {

    setTimeout(nextSequence,500);
  });
}
function checkAnswer(currentLevel)
{
  for (var i=0;i<currentLevel;i++)
  {

    if(gamePattern[i]==userClickedPattern[i])
    {
      if(i==(currentLevel-1))
      {
        console.log("user paeegter");
        setTimeout(nextSequence,1000);
      }

    }
  else
  {
    i=currentLevel;
    console.log("else loop"+i);
  // if(i==(currentLevel-1))
  //   {
    playSound("wrong");
   $("h1").text("Game Over Press any to continue");
   $(document).one("keypress",startOver);
   $("body").addClass("game-over");
   setTimeout(function(){  $("body").removeClass("game-over")},200);
   console.log("game failed");
    // }

  }
  }
}
function startOver()
{
  level=0;
  gamePattern=[];
  setTimeout(nextSequence,200);

  console.log("in start over"+level);
}
