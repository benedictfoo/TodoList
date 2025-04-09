import { updateTaskByIdFromStore } from "../../../backend/store/TaskStore";
import renderMainContent from "../../uiFunctions/renderMainContent";
import createElement from "../../uiFunctions/createElement";
import {
  mainListItemButtonClasses,
  mainListItemButtonUnCompletedClasses,
  mainListItemButtonCompletedClasses,
} from "../../../appVariables/classes";
export default function (task) {
  const activeRow = document.querySelector(".nav-item-row.active");
  const mainContentListItem = createElement(
    "li",
    { class: "main-content-list-item", "data-id": task.id },
    checkButton(),
    title()
  );
  function checkButton() {
    const button = createElement("button", {
      class: `${mainListItemButtonClasses} ${
        task.completed
          ? mainListItemButtonCompletedClasses
          : mainListItemButtonUnCompletedClasses
      }`,
      "data-id": task.id,
    });
    button.style.color =
      task.priority === 1
        ? "red"
        : task.priority === 2
        ? "orange"
        : task.priority === 3
        ? "blue"
        : "gray";

    button.addEventListener("click", () => {
      updateTaskByIdFromStore(task.id, { completed: !task.completed });
      renderMainContent(activeRow);
    });
    return button;
  }
  function title() {
    return createElement("span", {}, task.title);
  }
  return mainContentListItem;
}
