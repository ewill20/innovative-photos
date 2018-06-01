$(document).ready(function() {
	console.log("The document is ready and raring to go!");
});


// function initMap() {
// 	// Create a map object and specify the DOM element for display //
// 	var map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: 52.52000, lng: 13.4050},
//           zoom: 8
// })
// };
// "create profile" button click listener //
// $("#create-profile").on("click", function() {
// 	window.location = "/signup";
// 	console.log("Going to create a new profile");
// });

// "Your Travels" click listener that will redirect user to login page //
// $("#yourTravels").on("click", function() {
// 	window.location = "/signin";
// 	console.log("Going to login page");
// });

// "Let's Go" click listener and search event handler //
$("#letsgo").on("click", function() {
	
	// Setting a variable to get the user's input //
	var searchString = $("search-text-input").val().trim();
	// forming the query string //
	var data = 'search=' + searchString;

	if(searchString) {

		$.ajax({
			type: "POST",
			url: "#",
			data: data,
			beforeSend: function(html) { // this happens before actual call
                    $("#results").html(''); 
                    $("#searchresults").show();
                    $(".word").html(searchString);
               },
               success: function(html){ // this happens after we get results
                    $("#results").show();
                    $("#results").append(html);
			}
		});
	}
	return false;
});


// "login" button click listener, this also validates whether or not both input fields have something entered //
$("#send-button").on("click", function() {
	if($('#login-handle').val() == '') {
		alert("Please enter a valid username");
		return false;

	} else if($('#password').val() == '') {
		alert("Please enter a valid password");
		return false;
	} else(window.location = "/profile");
		console.log("login successful");
		return true;
});

// click listener for submit button when creating a new profile //
$("#creating-profile").on("click", function() {
	var pass1 = $("#password1").val().trim();
	var pass2 = $("#password2").val().trim();
	var ok = true;
	if($('#name').val() == '') {
		alert("Please Enter Your Name");
		return false;
	} else if($('#email').val() == '') {
		alert("Please Enter A Valid Email Address");
		return false;
	} else if($('#location').val() == '') {
		alert("Please Enter A Location");
		return false;
	} else if($('#handle').val() == '') {
		alert("Please Enter A Desired User Handle");
		return false;
	} else if($('#password1').val() == '') {
		alert("You Must Choose A Password");
		return false;
	} else if(pass1 != pass2) {
		alert("Your Password In Both Fields Must Match");
		ok = false;
	} else {
		var photo = null
		if ($("#profile-input").val()) {
			photo = $("#profile-input").val()
		} else {photo = null}
		
		var newUserObj = {
			name: $("#name").val().trim(),
			email: $("#email").val().trim(),
			location: $("#location").val().trim(),
			handle: $("#handle").val().trim(),
			password: pass1,
		}
		$.ajax("/api/user", {
			type: "POST",
			data: newUserObj
		}).then(
			function(newUser) {
				alert("You Have Successfully Created A Profile!");
				console.log(newUser);
				window.location = "/profile";
				$("#your-travels-body").append(newUserObj);
			}
			
		);
		
	}
});

// click listener and event handler for 'sign out' link //
$('#sign-out').on('click', function() {
	alert('You have been signed out');
	window.location = '/landing';
});

// click listener and event handler for 'account' link //
$('#account-link').on('click', function() {
	window.location = '/profile'
})

$('#pop-destinations').on('click', function() {
	window.location = '/popDestinations';
})

$("#pop-destinations-blue").on("click", function() {
	window.location = '/popDestinations';
})
$('#pop-destinations-aqua').on("click", function() {
	window.location = '/popDestinations';
})
$('#send-button').on('click', function() {
	window.location = '/profile';
})








 