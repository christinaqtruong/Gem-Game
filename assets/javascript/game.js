$(document).ready(function(){

    //counters and initial score
    var wins = 0;
    var losses = 0;
    var total = 0;
    
    var garnet = $("#garnet");
    var amethyst = $("#amethyst");
    var pearl = $("#pearl");
    var pink = $("#pink_diamond");
    
    var garnetsValue = 0;
    var amethystsValue = 0;
    var pearslValue = 0;
    var pinksValue = 0;
    
    var playerScore = 0;
    
    var over = false;
    
    //picks a random number for the player to match
    var number = 0;
    
    $(".winner").text("Congrats! You won!");
    $(".loser").text("Oops! You busted! Click Start Over to play again.");
    
    
    
    var letsPlay = $("#start").on("click", function()
    { 
        initialize();
    })
    
    garnet.on("click", function(){
        total = total + garnetsValue;
        console.log(total);
        playerScore.text(total);
        check(total, number);
    })  
    
    amethyst.on("click", function(){
        total = total + amethystsValue;
        console.log(total);
        playerScore.text(total);
        check(total, number);
    })
    
    pearl.on("click", function(){
        total = total + pearlsValue;
        console.log(total);
        playerScore.text(total); 
        check(total, number);
    })
    
    pink.on("click", function(){
        total = total + pinksValue;
        console.log(total);
        playerScore.text(total);
        check(total, number);
    })
    
    
    function check(total_check, number_check) {
        if (!over){
            if (total_check == number_check){
                console.log("You win!")
    
                wins++
                console.log(wins)
                $(".wins").text("Number of wins: " + wins)
                $("#start").show();
                $("#start").text("Play again")
                
                $(".winner").show();
                over = true;
            }
            else if (total_check > number_check){
                console.log("You lost!")
    
                losses++
                console.log(losses)
                $(".losses").text("Number of losses: " + losses)
                $("#start").show();
                $("#start").text("Start Over")
                
                $(".loser").show();
                over = true;
            }
            else{
                return;
            }
        }
    }
    
    function initialize()
    {
        number = (Math.floor(Math.random() * 121)) + 19;
        console.log(number);
    
        $(".generator").text(number);
        $("#start").hide();
        $(".loser").hide();
        $(".winner").hide();
        
        //puts total score on the screen
        total = 0;
        playerScore = $(".playerScore");
        playerScore.text(total);
    
        //sets a random value for the gems and console logs it
        garnetsValue = (Math.floor(Math.random() * 12));
        console.log(garnetsValue);
    
        amethystsValue = (Math.floor(Math.random() * 12));
        console.log(amethystsValue);
    
        pearlsValue = (Math.floor(Math.random() * 12));
        console.log(pearlsValue);
    
        pinksValue = (Math.floor(Math.random() * 12));
        console.log(pinksValue);
        
        over = false;
    }
    
    })
    