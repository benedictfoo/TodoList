import Task from "../../../backend/constructor/Task";
import returnFalseOrValidTaskFields from "../../../backend/getFields/returnFalseOrValidTaskFields";
import { getProjectsFromStore } from "../../../backend/store/ProjectStore";
import { addTasktoStore } from "../../../backend/store/TaskStore";
import createElement from "../../uiFunctions/createElement";

export default function () {
  const modalContent = createElement(
    "form",
    { class: "task-modal-content" },
    createElement("input", {
      class: "title-input",
      type: "text",
      placeholder: "Title",
    }),
    createElement("input", {
      class: "description-input",
      type: "text",
      placeholder: "Description",
    }),
    createElement("input", { type: "date", class: "date-input" }),
    createElement(
      "select",
      {
        class: "priority-select",
        name: "Priority",
      },
      createElement(
        "option",
        {
          class: "priority-option",
          value: 1,
        },
        "Priority 1"
      ),
      createElement(
        "option",
        {
          class: "priority-option",
          value: 2,
        },
        "Priority 2"
      ),
      createElement(
        "option",
        {
          class: "priority-option",
          value: 3,
        },
        "Priority 3"
      ),
      createElement(
        "option",
        {
          class: "priority-option",
          value: 4,
          selected: true,
        },
        "Priority 4"
      )
    ),
    createElement(
      "modal-content-row",
      { class: "modal-content-row" },
      createElement(
        "select",
        { class: "folder-select" },
        createElement(
          "option",
          { class: "folder-option", "data-project-id": "none", value: "none" },
          "Inbox"
        ),
        ...getProjectsFromStore().map((project) =>
          createElement(
            "option",
            {
              class: "folder-option",
              "data-project-id": project.id,
              value: project.id,
            },
            project.name
          )
        )
      ),
      createElement("button", { class: "modal-content-cancel" }, "Cancel"),
      createElement(
        "button",
        { class: "modal-content-add", type: "submit" },
        "Add task"
      )
    )
  );
  const modal = createElement("div", { class: "task-modal" }, modalContent);
  modalContent.addEventListener("submit", (e) => {
    e.preventDefault();

    let projectId = undefined;
    if (document.querySelector(".folder-select").value !== "none") {
      projectId = document.querySelector(".folder-select").value;
    }
    const validTaskFields = returnFalseOrValidTaskFields({
      title: document.querySelector(".title-input").value,
      description: document.querySelector(".description-input").value || null,
      date: document.querySelector(".date-input").value || null,
      priority: document.querySelector(".priority-select").value,
      projectId: projectId,
    });
    if (validTaskFields) {
      addTasktoStore(Task(validTaskFields));
    }
    modal.remove();
  });
  document.body.appendChild(modal);
}
