const githubForm = document.getElementById("github-seach");
const githubİnput = document.getElementById("name");
const github = new GitHub();
const uı = new UI();

eventListeners();
function eventListeners() {
  githubForm.addEventListener("submit", getData);
}

function getData(e) {
  let username = githubİnput.value;
  github
    .getGithubData(username)
    .then((response) => {
      if (response.user.message === "Not Found") uı.errorMessage("hata");
      else {
        uı.addCard(response.user);
      }
    })
    .catch((err) => console.log(err));

  uı.deleteValue();
  e.preventDefault();
}
