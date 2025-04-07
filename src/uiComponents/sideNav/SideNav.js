import createElement from "../createElement";
import SideNavToggle from "./SideNavToggle";
import SideNavAddTask from "./SideNavAddTask";
import SideNavInbox from "./SideNavInbox";
import SideNavToday from "./SideNavToday";
import SideNavUpcoming from "./SideNavUpcoming";
import SideNavFavoritesHeading from "./SideNavFavoriteHeading";
import SideNavFavoriteList from "./SideNavFavoriteList";
import SideNavProjectHeading from "./SideNavProjectHeading";
import SideNavProjectList from "./SideNavProjectList";
import SideNavRow from "./SideNavRow";
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
    SideNavFavoritesHeading(),
    SideNavFavoriteList(),
    SideNavProjectHeading(),
    SideNavProjectList()
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
