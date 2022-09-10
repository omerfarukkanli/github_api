class UI {
  constructor() {
    this.inputbox = document.getElementById("name");
    this.githubuser = document.getElementById("github-user");
    this.header = document.getElementById("header");
  }
  deleteValue() {
    this.inputbox.value = "";
  }
  addCard(user) {
    this.githubuser.innerHTML = `
            <div class="photo">
                <img src="${user.avatar_url}" alt="${user}">
            </div>
            <div class="info">
                <div class="github-info">
                    <div>takipçi<label>${user.followers}</label></div>
                    <div>takip edilen<label>${user.following}</label></div>
                    <div>repos<label>${user.public_repos}</label></div>
                </div>
                <div class="user-info">
                    <span>${user.name}</span>
                    <span>${user.company}</span>
                    <span>${user.bio}</span>

                </div>
            </div>
    `;
  }
  errorMessage(message) {
    const div = document.createElement("div");
    div.className = "error";
    div.textContent = message;
    this.header.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 3000);
  }
}
