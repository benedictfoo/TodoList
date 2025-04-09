import createElement from "../../uiFunctions/createElement";
import mainContentHeading from "./mainContentHeading";
import mainContentList from "./mainContentList";

export default function (options, title) {
  const mainContent = createElement(
    "main",
    { class: "main-content" },
    mainContentHeading(title),
    mainContentList(options)
  );

  return mainContent;
}
