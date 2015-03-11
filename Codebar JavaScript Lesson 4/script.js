// github user finder example

// assign getGithubUserInfo(username) to a variable response
function getGithubInfo(name) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.github.com/users/' + name, false);
	xhr.send();
	return xhr;
}


$(document).ready(function () {
	$(document).on('keypress', '#username', function(e) {
		if (e.which === 13) {
			// get val() from input field
			var name = $('#username').val();

			var response = getGithubInfo(name);

			console.log(response.responseText);
		}
	})
});