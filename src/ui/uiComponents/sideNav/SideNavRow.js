import createElement from "../createElement";
export default function (buttonClasses, spanName, rowAdditionalClasses, id) {
  const iconButton = createElement(
    "button",
    {},
    createElement("i", { class: buttonClasses })
  );
  const span = createElement("span", {}, spanName);
  const navItemRow = createElement(
    "div",
    {
      class: `nav-item-row ${rowAdditionalClasses}`,
    },
    iconButton,
    span
  );
  if (id) {
    navItemRow.dataset.id = id;
  }
  return navItemRow;
}
