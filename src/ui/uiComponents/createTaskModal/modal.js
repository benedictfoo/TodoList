import createElement from "../createElement";

export default function (titleInputElement, descriptionInputElement) {
  return createElement(
    "div",
    { class: "task-create-modal" },
    titleInputElement,
    descriptionInputElement
  );
}
