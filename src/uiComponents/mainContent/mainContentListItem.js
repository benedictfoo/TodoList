import createElement from "../createElement";

export default function (task) {
  const mainContentListItem = createElement(
    "li",
    { class: "main-content-list-item" },
    task.title
  );
  return mainContentListItem;
}
