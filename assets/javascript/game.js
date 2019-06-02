// * There will be four crystals displayed as buttons on the page. 
//Put four crystal images in the images folder. Create buttons on the html page. 

//with ids assigned to them for each crystal 

$(document).ready(function(){

//    * The player will be shown a random number at the start of the game.
var letsPlay = $("#start").on("click", function(){ 

    var number = (Math.floor(Math.random() * 121)) + 19;
    console.log(number);

    var newDiv = $("<div/>")
    var generatorDiv = $(".generator");
    newDiv.addClass("randomNumber");
    newDiv.text(number);
    generatorDiv.append(newDiv);
    

//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// ##### Option 1 Game design notes

// * The random number shown at the start of the game should be between 19 - 120.

// * Each crystal should have a random hidden value between 1 - 12.
})
});