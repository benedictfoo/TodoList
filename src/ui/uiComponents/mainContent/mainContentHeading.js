import createElement from "../../uiFunctions/createElement";

export default function (title) {
  const mainContentHeading = createElement(
    "h1",
    { class: "main-content-heading" },
    title
  );
  return mainContentHeading;
}
