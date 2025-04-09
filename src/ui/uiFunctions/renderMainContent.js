import { getProjectsFromStore } from "../../backend/store/ProjectStore";
import mainContent from "../uiComponents/mainContent/mainContent";
import removeMainContent from "../uiComponents/mainContent/removeMainContent";

export default function (navItemRow) {
  if (navItemRow.closest(".nav-item-inbox-row")) {
    removeMainContent();
    document.body.appendChild(mainContent({ completed: false }, "Inbox"));
  } else if (navItemRow.closest(".nav-item-today-row")) {
    removeMainContent();
    document.body.appendChild(
      mainContent({ date: "today", completed: false }, "Today")
    );
  } else if (navItemRow.closest(".nav-item-upcoming-row")) {
    removeMainContent();
    document.body.appendChild(
      mainContent({ date: "upcoming", completed: false }, "Upcoming")
    );
  } else if (navItemRow.closest(".nav-item-completed-row")) {
    removeMainContent();
    document.body.append(mainContent({ completed: true }, "Completed"));
  } else if (navItemRow.closest(".nav-project-row")) {
    removeMainContent();
    const projectId = navItemRow.closest(".nav-project-row").dataset.id;
    const projectTitle = getProjectsFromStore().find(
      (project) => project.id === projectId
    ).name;
    console.log(projectTitle);

    document.body.appendChild(mainContent({ projectId }, `${projectTitle}`));
  }
}
