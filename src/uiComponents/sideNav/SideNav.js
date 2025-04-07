import createElement from "../createElement";
import SideNavToggle from "./SideNavToggle";
import SideNavAddTask from "./SideNavAddTask";
import SideNavInbox from "./SideNavInbox";
import SideNavToday from "./SideNavToday";
import SideNavUpcoming from "./SideNavUpcoming";
export default function () {
  const sideNav = createElement(
    "nav",
    { class: "nav", "data-expanded": "true" },
    SideNavToggle(),
    SideNavAddTask(),
    SideNavInbox(),
    SideNavToday(),
    SideNavUpcoming()
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
