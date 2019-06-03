// * There will be four crystals displayed as buttons on the page. 
//Put four crystal images in the images folder. Create buttons on the html page. 

//with ids assigned to them for each crystal 

$(document).ready(function(){

//    * The player will be shown a random number at the start of the game.
var lockGame = false;
var wins = 0;
var losses = 0;
var number = (Math.floor(Math.random() * 121)) + 19;
var total = 0;

var letsPlay = $("#start").on("click", function(){ 
    if (lockGame !== true) {
    
        console.log(number);
        $(".generator").text(number);
        lockGame = true;
        }
//* When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
    var garnet = $("#garnet");
    var amethyst = $("#amethyst");
    var pearl = $("#pearl");
    var pink = $("#pink_diamond");
    
    var playerScore = $(".playerScore");

    playerScore.text(total);

    var garnetsValue = (Math.floor(Math.random() * 12));
    garnet.on("click", function(){
        total = total + garnetsValue;
        console.log(total);
        playerScore.text(total);  
       
    })

    var amethystsValue = (Math.floor(Math.random() * 12));
    amethyst.on("click", function(){
        total = total + amethystsValue;
        console.log(total);
        playerScore.text(total);  
       
    })

    var pearlsValue = (Math.floor(Math.random() * 12));
    pearl.on("click", function(){
        total = total + pearlsValue;
        console.log(total);
        playerScore.text(total);  
        
    })

    var pinksValue = (Math.floor(Math.random() * 12));
    pink.on("click", function(){
        total = total + pinksValue;
        console.log(total);
        playerScore.text(total);  
        
    })

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the beginning of the game.
    $(document).on("click",function(){
        if (total === number){
            
            console.log("You win!")

            ++wins
            console.log(wins)
            $(".wins").text("Number of wins: " + wins)

            $("#start").text("Play again")
            $(".winner").text("Congrats! You won!")
            letsPlay();
        }

    
//    * The player loses if their score goes above the random number.
        if (total > number){
                
        console.log("You lost!")

        ++losses
        console.log(losses)
        $(".wins").text("Number of losses: " + losses)

            $(".loser").text("Oops! You busted! Click Start Over to play again.")
            $("#start").text("Start Over")
            letsPlay();
        }
    }
        
});

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// ##### Option 1 Game design notes

// * The random number shown at the start of the game should be between 19 - 120.

// * Each crystal should have a random hidden value between 1 - 12.
