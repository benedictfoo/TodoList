import modal from "../uiComponents/addTaskModal/modal";
import { optionals } from "../uiComponents/addTaskModal/optionals";
import descriptionInput from "../uiComponents/addTaskModal/descriptionInput";
import titleInput from "../uiComponents/addTaskModal/titleInput";
import addActionModal from "../uiFunctions/addActionModalInsideOverlay";

import renderMainContent from "../uiFunctions/renderMainContent";

export default function () {
  document.querySelector(".nav").addEventListener("click", (e) => {
    // Delete all active except selected

    const navItemRow = e.target.closest(".nav-item-row");
    if (!navItemRow) {
      return;
    } else if (navItemRow.classList.contains("nav-item-task-row")) {
      // handle add task

      const modalElement = modal(titleInput(), descriptionInput(), optionals);
      addActionModal(modalElement);
    } else if (navItemRow) {
      const allNavRows = document.querySelectorAll(".nav-item-row");
      allNavRows.forEach((row) => row.classList.remove("active"));
      navItemRow.classList.add("active");
      renderMainContent(navItemRow);
    }
  });
}
