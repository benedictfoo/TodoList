import createElement from "../createElement";

export default function () {
  const titleInput = createElement("input", {
    class: "task-create-title task-create-input",
    type: "text",
    placeholder: "Task name",
  });
  return titleInput;
}
