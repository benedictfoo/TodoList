import createElement from "../createElement";
export default function () {
  const iconButton = createElement(
    "button",
    {},
    createElement("i", { class: "fa-solid fa-calendar-day" })
  );
  const span = createElement("span", {}, "Today");
  const navItemRow = createElement(
    "div",
    {
      class: "nav-item-row nav-item-today-row",
    },
    iconButton,
    span
  );
  return navItemRow;
}
