import createElement from "../createElement";
import SideNavToggle from "./SideNavToggle";
import SideNavRow from "./SideNavRow";
import sideNavHeading from "./sideNavHeading";
import SideNavFavoriteOrProjectList from "./SideNavFavoriteOrProjectList";
const favoriteProjects = [
  {
    name: "Project 1",
    color: "HotPink",
    favorited: true,
    id: "2e58f2fa-1ede-4f6b-9274-a1490c8ee327",
  },
  {
    name: "Project 2",
    color: "DarkOrange",
    favorited: true,
    id: "f24be39c-b029-4fac-8a8c-07f9d57b9a79",
  },
  {
    name: "Project 3",
    color: "DimGray",
    favorited: true,
    id: "363b3e2b-448b-4bea-ba37-3ceb73154a6d",
  },
  {
    name: "Project 4",
    color: "HotPink",
    favorited: true,
    id: "e660a3fd-6c8a-4e8e-be46-665a9cabb530",
  },
];
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
    SideNavFavoriteOrProjectList(favoriteProjects, "nav-project-list")
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
