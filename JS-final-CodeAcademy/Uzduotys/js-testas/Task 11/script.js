const newColum = (item) => {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  item.forEach((element) => {
    const colum = document.createElement("tr");

    const id = document.createElement("th");
    id.textContent = element.id;

    const skill = document.createElement("td");
    skill.textContent = element.skill;

    const deleteWrapper = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete this item";

    deleteButton.addEventListener("click", function (e) {
      console.log(element.id);
      deleteById(element.id);
    });

    tbody.appendChild(colum);
    colum.appendChild(id);
    colum.appendChild(skill);
    colum.appendChild(deleteWrapper);
    deleteWrapper.appendChild(deleteButton);
  });
};

const fetchSkills = async () => {
  try {
    const response = await fetch(`https://testapi.io/api/Colde/resource/skill`);
    data = await response.json();
    // console.log(data);
    newColum(data.data);
  } catch (error) {
    console.error(error);
  }
};

const deleteById = async (id) => {
  try {
    const response = await fetch(
      `https://testapi.io/api/Colde/resource/skill/${id}`,
      {
        method: "DELETE",
      }
    );
    data = await response.text();
    fetchSkills();
  } catch (error) {
    console.error(error);
  }
};

fetchSkills();
