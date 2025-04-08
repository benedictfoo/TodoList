import createElement from "../createElement";
import SideNavToggle from "./SideNavToggle";
import SideNavRow from "./SideNavRow";
import sideNavHeading from "./sideNavHeading";
import SideNavFavoriteOrProjectList from "./SideNavFavoriteOrProjectList";
import { getProjectsFromStore } from "../../store/ProjectStore";
const favoriteProjects = [
  ...getProjectsFromStore().filter((project) => project.favorited),
];
const allProjects = [...getProjectsFromStore()];
export default function () {
  const sideNav = createElement(
    "nav",
    { class: "nav", "data-expanded": "true" },
    SideNavToggle(),
    SideNavRow("fa-regular fa-square-plus", "Add task", "nav-item-task-row"),
    SideNavRow("fa-solid fa-inbox", "Inbox", "nav-item-inbox-row"),
    SideNavRow("fa-solid fa-calendar-day", "Today", "nav-item-today-row"),
    SideNavRow(
      "fa-solid fa-calendar-days",
      "Upcoming",
      "nav-item-upcoming-row"
    ),
    sideNavHeading("nav-favorite-heading", "Favorites"),
    SideNavFavoriteOrProjectList(favoriteProjects, "nav-favorite-list"),
    sideNavHeading("nav-project-heading", "Projects"),
    SideNavFavoriteOrProjectList(allProjects, "nav-project-list")
  );
  sideNav.addEventListener("click", (e) => {
    const navItemRow = e.target.closest(".nav-item-row");
    if (navItemRow) {
      const allNavRows = document.querySelectorAll(".nav-item-row");
      allNavRows.forEach((row) => row.classList.remove("active"));
      navItemRow.classList.add("active");
    }
  });
  return sideNav;
}
