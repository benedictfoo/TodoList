import createElement from "../createElement";
export default function () {
  const heading = createElement(
    "span",
    { class: "nav-project-heading" },
    "Projects"
  );
  return heading;
}
