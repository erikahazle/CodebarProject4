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

	$('#profile h2').val(user + " is GitHub user #" + user.id);
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