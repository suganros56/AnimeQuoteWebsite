
var buttonColors=['red','green','yellow','blue'];
var gamePattern=[];
var userClickPattern=[];
var level=0;
var started=false;


$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

  $(".btn").click(function(){
    var userChoosenColor = $(this).attr("id");
    userClickPattern.push(userChoosenColor);
    playSound(userChoosenColor);
    animation(userChoosenColor);
    checkAnswer(userClickPattern.length-1);
    
  });

  function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickPattern[currentLevel]){
            if (userClickPattern.length === gamePattern.length){
                setTimeout(function () {
                  nextSequence();
                }, 1000);
            }
        
    } else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);

        startOver();
          
      }
    

}


function nextSequence(){
    userClickPattern=[];
    level++;
    $('#level-title').text("level  "+ level);
    var randomnumber= Math.floor((Math.random())*4);
    var randomChoosenColor=buttonColors[randomnumber];
    gamePattern.push(randomChoosenColor);
    $('#'+ randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColor);

}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

  function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
    }


function animation(currentColor){
    $('#'+ currentColor).addClass("pressed");
    setTimeout(function (){
        $('#'+ currentColor).removeClass("pressed");
    },100);
}