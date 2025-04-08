import createElement from "../createElement";

export default function (task) {
  const mainContentListItem = createElement(
    "li",
    { class: "main-content-list-item", "data-id": task.id },
    task.title
  );
  return mainContentListItem;
}
