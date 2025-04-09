import createElement from "../../uiFunctions/createElement";

export default function () {
  const sideNavToggle = createElement(
    "button",
    { class: "nav-toggle" },
    createElement("i", { class: "fa-solid fa-bars" })
  );
  sideNavToggle.addEventListener("click", () => expandOrCloseSideNav());
  function expandOrCloseSideNav() {
    const nav = sideNavToggle.closest("nav");
    nav.dataset.expanded = nav.dataset.expanded === "true" ? "false" : "true";
  }
  return sideNavToggle;
}
