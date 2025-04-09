import modal from "../uiComponents/createTaskModal/modal";
import overlay from "../uiComponents/createTaskModal/overlay";
import titleDescription from "../uiComponents/createTaskModal/titleDescription";
import titleInput from "../uiComponents/createTaskModal/titleInput";
import { optionals } from "../uiComponents/createTaskModal/optionals";
export default function () {
  const titleInputElement = titleInput();
  const descriptionInputElement = titleDescription();

  const modalElement = modal(
    titleInputElement,
    descriptionInputElement,
    optionals
  );
  const overlayElement = overlay(modalElement);
  document.body.appendChild(overlayElement);
}
