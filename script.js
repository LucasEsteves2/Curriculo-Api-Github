function api() {
  fetch("https://api.github.com/users/LucasEsteves2").then((response) =>
    response.json().then((git) => {
      document.querySelector("#nome").innerHTML = `${git.name}`;
      document.querySelector("#bio").innerHTML = `${git.bio}`;
      document.querySelector("#cidade").innerHTML = `${git.location}`;
      document.querySelector(
        ".resume_profile"
      ).innerHTML = `<img src=${git.avatar_url} alt =${git.login} /> `;
    })
  );
}
api();

function repositorios() {
  var repositorios = [];

  fetch("https://api.github.com/users/LucasEsteves2/repos").then((response) =>
    response.json().then((git) => {
      for (var x = 0; x <= git.length; x++)
        document.getElementById("repositorios").innerHTML += `
            <li>
            <div id="nome-repositorio" class="date">
            <strong><a  href="${git[x].html_url}" target="blank">  ${git[x].name}</a></strong></div> 
            <div class="info">
              <p class="linguagem" class="semi-bold"> <strong> Linguagem: ${git[x].language}</strong> </p> 
              <p class="desc">${git[x].description}</p>
            </div>
            </li>`;
    })
  );
}

repositorios();
