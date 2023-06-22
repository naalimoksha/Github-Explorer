function searchUser() {
  var username = document.getElementById("searchInput").value;

  fetch("https://api.github.com/users/" + username + "/repos")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var repositories = document.getElementById("repositories");
      repositories.innerHTML = "";

      data.forEach(function(repo) {
        var repository = document.createElement("div");
        repository.classList.add("repository");

        var name = document.createElement("a");
        name.href = repo.html_url;
        name.textContent = repo.name;

        repository.appendChild(name);
        repositories.appendChild(repository);
      });
    })
    .catch(function(error) {
      console.log(error);
    });
}
  