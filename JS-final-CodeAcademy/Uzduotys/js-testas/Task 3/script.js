/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const output = document.getElementById("output");
const button = document.getElementById("btn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  dataFetch();
});

const createCard = (item) => {
  message.innerHTML = "";
  item.forEach((element) => {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("card");

    const login = document.createElement("h1");
    // login.classList.add("card-text", "pb-3");
    login.textContent = element.login;

    const image = document.createElement("img");
    image.classList.add("image");
    image.style.width = "8rem";
    image.src = element.avatar_url;
    image.alt = "photo";

    output.appendChild(mainDiv);
    mainDiv.appendChild(login);
    mainDiv.appendChild(image);
    // console.log(element);
  });
};

const dataFetch = async () => {
  try {
    const response = await fetch(ENDPOINT);
    data = await response.json();
    console.log(data);
    createCard(data);
  } catch (error) {
    console.error(error);
  }
};
