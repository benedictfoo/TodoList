import addTaskModal from "../uiFunctions/addTaskModal";
import renderMainContent from "../uiFunctions/renderMainContent";

export default function () {
  document.querySelector(".nav").addEventListener("click", (e) => {
    // Delete all active except selected
    console.log("nav clicked");

    const navItemRow = e.target.closest(".nav-item-row");
    if (!navItemRow) {
      return;
    } else if (navItemRow.classList.contains("nav-item-task-row")) {
      // handle add task
      addTaskModal();
    } else if (navItemRow) {
      const allNavRows = document.querySelectorAll(".nav-item-row");
      allNavRows.forEach((row) => row.classList.remove("active"));
      navItemRow.classList.add("active");
      renderMainContent(navItemRow);
    }
  });
}
