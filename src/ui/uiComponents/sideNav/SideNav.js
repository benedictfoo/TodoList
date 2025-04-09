import SideNavToggle from "./SideNavToggle";
import SideNavRow from "./SideNavRow";
import sideNavHeading from "./sideNavHeading";
import SideNavFavoriteOrProjectList from "./SideNavFavoriteOrProjectList";
import * as Classes from "../../../appVariables/classes";
import createElement from "../../uiFunctions/createElement";
import { getProjectsFromStore } from "../../../backend/store/ProjectStore";
const favoriteProjects = [
  ...getProjectsFromStore().filter((project) => project.favorited),
];
const allProjects = [...getProjectsFromStore()];
export default function () {
  const sideNav = createElement(
    "nav",
    { class: "nav", "data-expanded": "true" },
    SideNavToggle(),
    SideNavRow(
      Classes.addTaskButtonClasses,
      "Add task",
      Classes.addTaskClasses
    ),
    SideNavRow(Classes.inboxButtonClasses, "Inbox", Classes.inboxClasses),
    SideNavRow(Classes.todayButtonClasses, "Today", Classes.todayClasses),
    SideNavRow(
      Classes.upcomingButtonClasses,
      "Upcoming",
      Classes.upcomingClasses
    ),
    SideNavRow(
      Classes.completedButtonClasses,
      "Completed",
      Classes.completedClasses
    ),
    sideNavHeading(Classes.favoriteHeadingClasses, "Favorites"),
    SideNavFavoriteOrProjectList(favoriteProjects, Classes.favoriteListClasses),
    sideNavHeading(Classes.projectHeadingClasses, "Projects"),
    SideNavFavoriteOrProjectList(allProjects, Classes.projectListClasses)
  );

  return sideNav;
}
