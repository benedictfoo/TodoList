import createElement from "../createElement";
export default function () {
  const heading = createElement(
    "span",
    { class: "nav-favorite-heading" },
    "Favorites"
  );
  return heading;
}
