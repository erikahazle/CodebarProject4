// github user finder example

// assign getGithubUserInfo(username) to a variable response
function getGithubInfo(name) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.github.com/users/' + name, false);
	xhr.send();
	return xhr;
}

function showUser(user) {
	// render user information
	$('#profile .information').show();
	$('#profile .avatar').show();
	$('#profile h2').html(user.login + " is Github user #" +user.id);
	$('#profile .information').html("<a class='profile' href='"+user.html_url+"'> Go to "+ user.name+"'s profile</a>");
	$('#profile .avatar').html("<img src=https://gravatar.com/avatar/"+ user.gravatar_id+"?s=220/>");
}


function noSuchUser(username) {
  $('#profile h2').html("No user " + username);
  $('#profile .information').hide();
  $('#profile .avatar').hide();
}

$(document).ready(function () {
	$(document).on('keypress', '#username', function(e) {
		if (e.which === 13) {
			// get val() from input field
			var name = $('#username').val();

			response = getGithubInfo(name);

			if (response.status == 200) {
				showUser(JSON.parse(response.responseText));
			} else {
				noSuchUser(username);
			}
		}
	})
});