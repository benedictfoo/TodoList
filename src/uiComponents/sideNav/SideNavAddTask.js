import createElement from "../createElement";
export default function () {
  const iconButton = createElement(
    "button",
    {},
    createElement("i", { class: "fa-regular fa-square-plus" })
  );
  const span = createElement("span", {}, "Add task");
  const navItemRow = createElement(
    "div",
    {
      class: "nav-item-row nav-item-task-row",
    },
    iconButton,
    span
  );
  return navItemRow;
}
