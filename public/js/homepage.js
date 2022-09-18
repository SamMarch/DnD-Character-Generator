const characterList = document.getElementById("character-list");
const namePreview = document.getElementById("selected-character-name");
const racePreview = document.getElementById("selected-character-race");
const classPreview = document.getElementById("selected-character-class");
const avatarPreview = document.getElementById("selected-character-avatar");
const editPreview = document.getElementById("selected-character-edit");

characterList.addEventListener("click", async e => {
  const data = e.target.dataset;
  if (!data.id) return;

  const res = await fetch(`/api/user/character/attributes/${data.id}`);

  const attributes = await res.json();
  namePreview.innerText = data.name;
  racePreview.innerText = data.race;
  classPreview.innerText = data.class;
  avatarPreview.src = data.avatar;
  editPreview.setAttribute("href", `/update/${data.id}`);
  attributes.forEach(attribute => {
    const id = `selected-character-attribute-${attribute.attribute_id}`;
    const element = document.getElementById(id);
    element.innerText = attribute.value;
  });
});
