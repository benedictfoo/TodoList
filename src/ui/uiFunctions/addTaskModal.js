import createElement from "./createElement";
import modal from "../uiComponents/createTaskModal/modal";
import overlay from "../uiComponents/createTaskModal/overlay";
import titleDescription from "../uiComponents/createTaskModal/titleDescription";
import titleInput from "../uiComponents/createTaskModal/titleInput";
export default function () {
  const titleInputElement = titleInput();
  const descriptionInputElement = titleDescription();

  const taskCreateOptionals = createElement("div", {
    class: "task-create-optionals",
  });
  const modalElement = modal(
    titleInputElement,
    descriptionInputElement,
    taskCreateOptionals
  );
  const overlayElement = overlay(modalElement);
  document.body.appendChild(overlayElement);
}
