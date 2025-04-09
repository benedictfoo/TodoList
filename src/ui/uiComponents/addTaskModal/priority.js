import { taskCreateOptionalPriorityClasses } from "../../../appVariables/classes";
import addActionModalInsideOverlay from "../../uiFunctions/addActionModalInsideOverlay";
import createElement from "../../uiFunctions/createElement";
import { priorityButton } from "./priorityButton";

export const priority = createElement(
  "button",
  {
    class: taskCreateOptionalPriorityClasses,
  },
  priorityButton,
  "Priority"
);

priority.addEventListener("click", () => {
  const modal = createElement("div", { class: "optional-modal" }, "modal");

  const overlay = addActionModalInsideOverlay(modal);

  overlay.addEventListener("click", (e) => {
    if (!modal.contains(e.target)) {
      overlay.remove();
    }
  });
  return overlay;
});
