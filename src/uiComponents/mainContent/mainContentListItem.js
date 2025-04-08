import createElement from "../createElement";

export default function (task) {
  const activeRow = document.querySelector(".nav-item-row.active");
  const mainContentListItem = createElement(
    "li",
    { class: "main-content-list-item", "data-id": task.id },
    !task.completed && checkButton(),
    title()
  );
  function checkButton() {
    const button = createElement("button", {
      class: "task-button fa-regular fa-circle",
      "data-id": task.id,
    });
    button.addEventListener("mouseenter", () => {
      button.classList.remove("fa-circle");
      button.classList.add("fa-circle-check");
    });
    button.addEventListener("mouseleave", () => {
      button.classList.add("fa-circle");
      button.classList.remove("fa-circle-check");
    });
    return button;
  }
  function title() {
    return createElement("span", {}, task.title);
  }
  return mainContentListItem;
}
