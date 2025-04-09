import { actionModalClasses } from "../../../appVariables/classes";
import createElement from "../../uiFunctions/createElement";

export default function (
  titleInputElement,
  descriptionInputElement,
  optionals
) {
  return createElement(
    "div",
    { class: actionModalClasses },
    titleInputElement,
    descriptionInputElement,
    optionals
  );
}
