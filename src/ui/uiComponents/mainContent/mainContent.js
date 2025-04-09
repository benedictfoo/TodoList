import createElement from "../../uiFunctions/createElement";
import mainContentHeading from "./mainContentHeading";
import mainContentList from "./mainContentList";
import { mainClasses } from "../../../appVariables/classes";
export default function (options, title) {
  const mainContent = createElement(
    "main",
    { class: mainClasses },
    mainContentHeading(title),
    mainContentList(options)
  );

  return mainContent;
}
