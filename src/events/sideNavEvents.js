import mainContent from "../uiComponents/mainContent/mainContent";
import removeMainContent from "../uiComponents/mainContent/removeMainContent";

export default function () {
  document.querySelector(".nav").addEventListener("click", (e) => {
    // Delete all active except selected
    const navItemRow = e.target.closest(".nav-item-row");
    if (navItemRow) {
      const allNavRows = document.querySelectorAll(".nav-item-row");
      allNavRows.forEach((row) => row.classList.remove("active"));
      navItemRow.classList.add("active");
    }

    if (navItemRow.closest(".nav-item-inbox-row")) {
      removeMainContent();
      document.body.appendChild(mainContent({ completed: false }, "Inbox"));
    } else if (navItemRow.closest(".nav-item-today-row")) {
      removeMainContent();
      document.body.appendChild(mainContent({ date: 1111 }, "Today"));
    } else if (navItemRow.closest(".nav-item-upcoming-row")) {
      removeMainContent();
      document.body.appendChild(mainContent({ date: 111 }, "Upcoming"));
    } else if (navItemRow.closest(".nav-item-completed-row")) {
      removeMainContent();
      document.body.append(mainContent({ completed: true }, "Completed"));
    } else if (navItemRow.closest(".nav-project-row")) {
      removeMainContent();
      const projectId = navItemRow.closest(".nav-project-row").dataset.id;
      document.body.appendChild(mainContent({ projectId }, "Upcoming"));
    }
  });
}
