import { taskCreateModalClasses } from "../../../appVariables/classes";
import createElement from "../../uiFunctions/createElement";

export default function (
  titleInputElement,
  descriptionInputElement,
  optionals
) {
  return createElement(
    "div",
    { class: taskCreateModalClasses },
    titleInputElement,
    descriptionInputElement,
    optionals
  );
}
