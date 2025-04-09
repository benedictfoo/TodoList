import createElement from "../../uiFunctions/createElement";
import { projectListItemClasses } from "../../../appVariables/classes";
export default function (project) {
  const iconButton = createElement(
    "button",
    {},
    createElement("i", { class: "fa-solid fa-hashtag" })
  );
  const span = createElement("span", {}, project.name);
  const row = createElement(
    "li",
    {
      class: projectListItemClasses,
      "data-id": project.id,
    },
    iconButton,
    span
  );
  row.querySelector("button").style.color = project.color;
  return row;
}
