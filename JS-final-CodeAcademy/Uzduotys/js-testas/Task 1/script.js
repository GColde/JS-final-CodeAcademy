/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
//asd

const input = document.getElementById("search");
const button = document.getElementById("submit-btn");
const output = document.getElementById("output");

button.addEventListener("click", function (e) {
  e.preventDefault();
  getWeight(input.value);
  //   console.log(input.value);
});

const getWeight = (kg) => {
  const lbPara = document.createElement("p");
  lbPara.textContent = "lb: " + kg * 2.2046;
  lbPara.classList.add("result");
  console.log(lbPara.textContent);
  const gPara = document.createElement("p");
  gPara.textContent = "g: " + kg / 0.001;
  gPara.classList.add("result");
  const ozPara = document.createElement("p");
  ozPara.textContent = "oz: " + kg * 35.274;
  ozPara.classList.add("result");
  // mainDiv.style.width = "18rem";

  output.appendChild(lbPara);
  output.appendChild(gPara);
  output.appendChild(ozPara);
};
