const skillDom = document.getElementById("skill");
const form = document.getElementById("createSkillForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let skill = skillDom.value;
  await createSkill(skill);
});

const createSkill = async (skill) => {
  try {
    const rawResponse = await fetch(
      "https://testapi.io/api/Colde/resource/skill",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ skill: `${skill}` }),
      }
    );
    const content = await rawResponse.json();
  } catch (error) {
    console.error(error);
  }
};

// (async () => {
//   const rawResponse = await fetch(
//     "https://testapi.io/api/Colde/resource/skill",
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       method: "POST",
//       body: JSON.stringify({ skill: "Random ass skill" }),
//     }
//   );
//   const content = await rawResponse.json();

//   console.log(content);
// })();
