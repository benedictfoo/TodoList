import createElement from "../createElement";
import SideNavToggle from "./SideNavToggle";
import SideNavAddTask from "./SideNavAddTask";
export default function () {
  const sideNav = createElement(
    "nav",
    { class: "nav", "data-expanded": "true" },
    SideNavToggle(),
    SideNavAddTask()
  );

  return sideNav;
}
