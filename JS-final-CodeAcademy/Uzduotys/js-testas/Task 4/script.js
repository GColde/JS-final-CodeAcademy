/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const output = document.getElementById("output");

const createCard = (item) => {
  item.forEach((element) => {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("card");

    const brand = document.createElement("h2");
    brand.textContent = element.brand;

    const ul = document.createElement("ul");

    output.appendChild(mainDiv);
    mainDiv.appendChild(brand);
    mainDiv.appendChild(ul);

    element.models.forEach((model) => {
      const li = document.createElement("li");
      li.style.color = "white";
      li.textContent = model;
      ul.appendChild(li);
    });

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

dataFetch();
