import createElement from "../createElement";
export default function () {
  const iconButton = createElement(
    "button",
    {},
    createElement("i", { class: "fa-solid fa-inbox" })
  );
  const span = createElement("span", {}, "Inbox");
  const navItemRow = createElement(
    "div",
    {
      class: "nav-item-row nav-item-inbox-row",
    },
    iconButton,
    span
  );
  return navItemRow;
}
