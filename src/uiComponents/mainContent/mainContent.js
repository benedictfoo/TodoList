import createElement from "../createElement";
import mainContentHeading from "./mainContentHeading";
import mainContentList from "./mainContentList";

export default function (options, title) {
  const mainContent = createElement(
    "div",
    { class: "main-content" },
    mainContentHeading(title),
    mainContentList(options)
  );

  return mainContent;
}
