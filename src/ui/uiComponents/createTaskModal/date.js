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
