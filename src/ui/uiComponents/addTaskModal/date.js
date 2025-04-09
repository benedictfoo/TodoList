import {
  dateModalClasses,
  taskCreateOptionalButtonClasses,
} from "../../../appVariables/classes";
import addActionModalInsideOverlay from "../../uiFunctions/addActionModalInsideOverlay";
import createElement from "../../uiFunctions/createElement";
import { dateButton } from "./dateButton";

const dateInput = createElement("input", { type: "date", class: "date-input" });
export const date = createElement(
  "button",
  {
    class: taskCreateOptionalButtonClasses,
  },
  dateInput
);
