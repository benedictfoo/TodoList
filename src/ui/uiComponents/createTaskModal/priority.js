import { taskCreateOptionalPriorityClasses } from "../../../appVariables/classes";
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
