

		$( document ).ready(function() {

			// Declare variables

			var userScore = 0;
			var randomNumber = 0;
			var wins = 0;
			var losses = 0 ;
			var diamondValue = 0;
			var sapphireValue = 0;
			var rubyValue = 0;
			var emeraldValue = 0;
			
			// Declare functions	

				//Function to generate values

			var generateValues = function(){

				diamondValue = Math.floor((Math.random() * 12) + 1);
				
				sapphireValue = Math.floor((Math.random() * 12) + 1);
				
				rubyValue = Math.floor((Math.random() * 12) + 1);
				
				emeraldValue = Math.floor((Math.random() * 12) + 1);

				randomNumber = Math.floor((Math.random() * 120) + 19);
				
				$("#randomNumber").text(randomNumber);

				userScore = 0;

				$("#userScorePrint").text(" " + userScore);

				// Check the random values are created

				console.log("Diamond: " + diamondValue);
				console.log("Sapphire: " + sapphireValue);
				console.log("Emerald: " + emeraldValue);
				console.log("Ruby: " + rubyValue);
				console.log("Target Score: " + randomNumber);

			};

			// Function to compare User's Score vs Random Total

			var compareScores = function(){
    			if(userScore > randomNumber){
    				alert("You went over!  You lost.");
    				losses = losses + 1
    				$("#losses").text(losses);
    				generateValues();
    				
    			}
    			if (userScore === randomNumber){
    				alert("Winner winner chicken dinner!");
    				wins = wins + 1;
    				$("#wins").text(wins);
    				generateValues();
    			}	
    		};


    		// Run Javascript	

				// Call the function to generate random values

			generateValues();

				// Identify click events
				// If clicked, then add the cystal value to the User Score
				// Then compare User Score vs Random Number (call the compareScore function)

			$("#diamond-pic").click(function(){
				userScore = userScore + diamondValue;
				$("#userScorePrint").text(" " + userScore);
				compareScores();
			});

			$("#sapphire-pic").click(function(){
				userScore = userScore + sapphireValue;
				$("#userScorePrint").text(" " + userScore);
				compareScores();
			});

			$("#emerald-pic").click(function(){
				userScore = userScore + emeraldValue;
				$("#userScorePrint").text(" " + userScore);
				compareScores();
			});

			$("#ruby-pic").click(function(){
				userScore = userScore + rubyValue;
				$("#userScorePrint").text(" " + userScore);
				compareScores();
			});

});
