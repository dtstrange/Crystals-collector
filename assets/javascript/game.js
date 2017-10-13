var game = {
    //global variables
    winCounter: 0,
    loseCounter: 0,
    userAmount: 0,
    gameAmount: 0,
    
    crystalRandomValue: function() {
        $("#red").attr("data-num", Math.floor(Math.random() * 12) + 1)
        $("#blue").attr("data-num", Math.floor(Math.random() * 12) + 1)
        $("#yellow").attr("data-num", Math.floor(Math.random() * 12) + 1)
        $("#green").attr("data-num", Math.floor(Math.random() * 12) + 1)
        game.gameAmount = Math.floor(Math.random() * 120) + 19
        $("#points").text(game.gameAmount)
    },
    addScore: function(x) {
        game.userAmount += x
        if (game.userAmount > game.gameAmount) {
            game.loseCounter++
                $("#resetbtn").css("display", "block")
        } else if (game.userAmount === game.gameAmount) {
            game.winCounter++
                $("#resetbtn").css("display", "block")
        }
        $("#counters").empty()
        $("#counters").append("<p>Wins: " + game.winCounter + "</p>")
        $("#counters").append("<p>Losses: " + game.loseCounter + "</p>")
        $("#score").text(game.userAmount)


    }, //end addScore fucntion
    gameReset: function() {
        
        game.addScore(0) 
        
        game.userAmount === 0
        $("#score").empty()
        $("#score").removeData("num")
        game.crystalRandomValue()
    } //end gameReset function

} //end game object


$(document).ready(function() {
    // body...
    game.crystalRandomValue()
    //onlick functions
    $("#red").on("click", function() {
        var redNum = $("#red").data("num")
        game.addScore(redNum)
    });

    $("#blue").on("click", function() {
        var blueNum = $("#blue").data("num")
        game.addScore(blueNum)
    });

    $("#yellow").on("click", function() {
        var yellowNum = $("#yellow").data("num")
        game.addScore(yellowNum)
    });

    $("#green").on("click", function() {
        var greenNum = $("#green").data("num")
        game.addScore(greenNum)
    });
    $("#resetbtn").on("click", game.gameReset);
});