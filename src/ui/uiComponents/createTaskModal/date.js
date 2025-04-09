import { taskCreateOptionalDateClasses } from "../../../appVariables/classes";
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

date.addEventListener("click", () => {
  console.log("hye");

  const modal = createElement("div", { class: "optional-modal" }, "modal");

  const overlay = createElement("div", { class: "optional-overlay" }, modal);
  document.body.appendChild(overlay);
  overlay.addEventListener("click", (e) => {
    if (!modal.contains(e.target)) {
      overlay.remove();
    }
  });
  return overlay;
});
