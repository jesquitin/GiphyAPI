$(document).ready(function() {
	// Initial array of movies
	var sports = ['basketball', 'football', 'soccer', 'fishing', 'skiing', 'baseball'];

	//variables

	function showSports() {
		var sport = $(this).attr('data-name');
		// query Giphy API
		var queryURL =
			'https://api.giphy.com/v1/gifs/search?q=' + sports + 'api_key=k9yc5izjLNBifhmFRkfxruXbze1XWJpQ&limit=10';

		$.ajax({
			url: queryURL,
			method: 'GET',
		}).then(function(response) {
            console.log(response);
            
            for ( var i = 0; i <response.length; i++ )

			var sportDiv = $("<div class='sport'>");

			// Retrieving the URL for the image
			var imgURL = response[i].url;

			// Creating an element to hold the image
			var image = $('<img>').attr('src', imgURL);

			// Appending the image
			sportDiv.append(image);

			// Putting the entire movie above the previous movies
			$('#sport-view').prepend(sportDiv);
		});
	}

	function createButtons() {
		//clearing the previous sports
		$('#sports-view').empty();

		// looping through array to generate buttons
		for (var i = 0; i < sports.length; i++) {
			//creating buttons
			var btn = $('<button>');
			// Adding a class bootstrap primary
			btn.addClass('btn btn-primary sport-btn');
			btn.attr('data-name', sports[i]);
			btn.text(sports[i]);
			// Adding the button to the HTML
			$('#sports-view').append(btn);
		}
	}

	// adding new sport
	$('#add-sport').on('click', function(event) {
		//Used to prevent default behavior
		event.preventDefault();

		// Input box text
		var sport = $('#sport-input')
			.val()
			.trim();
		// adds new sports
		sports.push(sport);

		// calling the create buttons function
		createButtons();
	});

	$(document).on('click', '.sport-btn', showSports);
	// creating initial list of buttons
	createButtons();
});
