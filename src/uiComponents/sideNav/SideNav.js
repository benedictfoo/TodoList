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
    SideNavRow(
      "fa-solid fa-circle-check",
      "Completed",
      "nav-item-completed-row"
    ),
    sideNavHeading("nav-favorite-heading", "Favorites"),
    SideNavFavoriteOrProjectList(favoriteProjects, "nav-favorite-list"),
    sideNavHeading("nav-project-heading", "Projects"),
    SideNavFavoriteOrProjectList(allProjects, "nav-project-list")
  );

  return sideNav;
}
