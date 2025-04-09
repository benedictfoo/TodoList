import createElement from "../createElement";

export default function () {
  return createElement("input", {
    class: "task-create-description task-create-input",
    type: "text",
    placeholder: "Task description",
  });
}
