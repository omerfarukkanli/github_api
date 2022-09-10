class GitHub {
  constructor() {
    this.url = "https://api.github.com/users/";
  }
  async getGithubData(username) {
    const responseUser = await fetch(this.url + username);
    const data = await responseUser.json();

    return { user: data };
  }
}
