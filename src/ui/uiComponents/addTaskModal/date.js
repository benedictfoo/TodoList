import { taskCreateOptionalDateClasses } from "../../../appVariables/classes";
import addActionModalInsideOverlay from "../../uiFunctions/addActionModalInsideOverlay";
import createElement from "../../uiFunctions/createElement";
import { dateButton } from "./dateButton";

export const date = createElement(
  "button",
  {
    class: taskCreateOptionalDateClasses,
  },
  dateButton,
  "Date"
);

const dateInput = createElement("input", { type: "date", class: "date-input" });

date.addEventListener("click", () => {
  const modal = createElement("div", { class: "optional-modal" }, dateInput);

  const overlay = addActionModalInsideOverlay(modal);

  overlay.addEventListener("click", (e) => {
    if (!modal.contains(e.target)) {
      overlay.remove();
    }
  });
  return overlay;
});
