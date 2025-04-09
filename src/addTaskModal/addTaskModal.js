import createElement from "../uiComponents/createElement";
export default function () {
  const titleInput = createElement("input", {
    class: "task-create-title task-create-input",
    type: "text",
    placeholder: "Task name",
  });
  const descriptionInput = createElement("input", {
    class: "task-create-description task-create-input",
    type: "text",
    placeholder: "Task description",
  });

  const taskCreateOptionals = createElement("div", {
    class: "task-create-optionals",
  });
  const modal = createElement(
    "div",
    { class: "task-create-modal" },
    titleInput,
    descriptionInput
  );
  const overlay = createElement("div", { class: "task-create-overlay" }, modal);
  document.querySelector(".main-content").appendChild(overlay);
  overlay.addEventListener("click", (e) => {
    if (!modal.contains(e.target)) {
      overlay.remove();
    }
  });
}
