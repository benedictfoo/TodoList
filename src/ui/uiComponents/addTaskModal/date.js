import { taskCreateDateClasses } from "../../../appVariables/classes";
import addActionModalInsideOverlay from "../../uiFunctions/addActionModalInsideOverlay";
import createElement from "../../uiFunctions/createElement";
import { dateButton } from "./dateButton";

export const date = createElement(
  "button",
  {
    class: taskCreateDateClasses,
  },
  dateButton,
  "Date"
);

const dateInput = createElement("input", { type: "date", class: "date-input" });
date.addEventListener("click", () => {
  const modal = createElement(
    "div",
    { class: "optional-modal date-modal" },
    dateInput
  );
  const overlay = addActionModalInsideOverlay(modal);
  dateInput.addEventListener("change", () => overlay.remove());
});
