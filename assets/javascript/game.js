$(document).ready(function(){

var lockGame = false;

//counters and initial score
var wins = 0;
var losses = 0;
var total = 0;

//picks a random number for the player to match
var number = (Math.floor(Math.random() * 121)) + 19;

var letsPlay = $("#start").on("click", function(){ 
    
    //once the player clicks the button, it console logs the random number and puts it on the screen and hides the button
    if (lockGame !== true) {
    
    console.log(number);

    $(".generator").text(number);
    $("#start").hide();
    lockGame = true;
    }
    
    //variables for grabbing the different gem elements
    var garnet = $("#garnet");
    var amethyst = $("#amethyst");
    var pearl = $("#pearl");
    var pink = $("#pink_diamond");
    
    //puts total score on the screen
    var playerScore = $(".playerScore");
    playerScore.text(total);

    //sets a random value for the gems and console logs it
    var garnetsValue = (Math.floor(Math.random() * 12));
    console.log(garnetsValue);

    var amethystsValue = (Math.floor(Math.random() * 12));
    console.log(amethystsValue);

    var pearlsValue = (Math.floor(Math.random() * 12));
    console.log(pearlsValue);

    var pinksValue = (Math.floor(Math.random() * 12));
    console.log(pinksValue);

  //If the player's total score equals the random number generated, display winning statements, add 1 the win counter and reveal the new button displaying the text "play again"
  var winner = function(){
    
    if (total === number){
                
            console.log("You win!")
        
            wins++
            console.log(wins)

            $(".wins").text("Number of wins: " + wins)
            $("#start").show();
            $("#start").text("Play again")
            $(".winner").text("Congrats! You won!")

            lockGame = false;

            garnet.text(garnetsValue);
            pearl.text(pearlsValue);
            amethyst.text(amethystsValue);
            pink.text(pinksValue);
        } else
    
    
//     //    * The player loses if their score goes above the random number.
    if (total > number){
            
        console.log("You lost!")
        
        losses++
        console.log(losses)
        
        $(".losses").text("Number of losses: " + losses)
        $("#start").show();
        $(".loser").text("Oops! You busted! Click Start Over to play again.")
        $("#start").text("Start Over")
        
        lockGame = false;

        garnet.text(garnetsValue);
        pearl.text(pearlsValue);
        amethyst.text(amethystsValue);
        pink.text(pinksValue);
    }
}


    /*If the player's total does not equal the random generator number, then clicking Garnet's button adds 
    her value to the total score and displays the new total on the screen*/
    if (total != number){
        garnet.on("click", function(){
            total = total + garnetsValue;
            playerScore.text(total);
            winner();
        })  
        
        amethyst.on("click", function(){
            total = total + amethystsValue;
            console.log(total);
            playerScore.text(total);
            winner();  
        })
    
        pearl.on("click", function(){
            total = total + pearlsValue;
            console.log(total);
            playerScore.text(total);  
            winner();
        })
   
        pink.on("click", function(){
            total = total + pinksValue;
            console.log(total);
            playerScore.text(total);
            winner();   
        })
        }
    
  
})
})

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.



//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// ##### Option 1 Game design notes

// * The random number shown at the start of the game should be between 19 - 120.

// * Each crystal should have a random hidden value between 1 - 12.