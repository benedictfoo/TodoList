import createElement from "../createElement";
import SideNavToggle from "./SideNavToggle";
export default function () {
  const sideNav = createElement(
    "nav",
    { class: "nav", "data-expanded": "true" },
    SideNavToggle()
  );

  return sideNav;
}
