import createElement from "../../uiFunctions/createElement";
import { mainHeadingClasses } from "../../../appVariables/classes";
export default function (title) {
  const mainContentHeading = createElement(
    "h1",
    { class: mainHeadingClasses },
    title
  );
  return mainContentHeading;
}
