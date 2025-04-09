import { taskCreateOverlayClasses } from "../../../appVariables/classes";
import createElement from "../../uiFunctions/createElement";

export default function (modalElement) {
  const overlay = createElement(
    "div",
    { class: taskCreateOverlayClasses },
    modalElement
  );

  overlay.addEventListener("click", (e) => {
    if (!modalElement.contains(e.target)) {
      overlay.remove();
    }
  });
  return overlay;
}
