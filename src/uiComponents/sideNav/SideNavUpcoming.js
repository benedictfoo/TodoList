import createElement from "../createElement";
export default function () {
  const iconButton = createElement(
    "button",
    {},
    createElement("i", { class: "fa-solid fa-calendar-days" })
  );
  const span = createElement("span", {}, "Upcoming");
  const navItemRow = createElement(
    "div",
    {
      class: "nav-item-row nav-item-upcoming-row",
    },
    iconButton,
    span
  );
  return navItemRow;
}
