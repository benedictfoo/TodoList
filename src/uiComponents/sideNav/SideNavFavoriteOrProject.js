import createElement from "../createElement";

export default function (project) {
  const iconButton = createElement(
    "button",
    {},
    createElement("i", { class: "fa-solid fa-hashtag" })
  );
  const span = createElement("span", {}, project.name);
  const row = createElement(
    "div",
    {
      class: "nav-favorite-row nav-item-row",
      "data-id": project.id,
    },
    iconButton,
    span
  );
  row.querySelector("button").style.color = project.color;
  return row;
}
