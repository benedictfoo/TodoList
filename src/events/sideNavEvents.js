import renderMainContent from "../renderMainContent/renderMainContent";

export default function () {
  document.querySelector(".nav").addEventListener("click", (e) => {
    // Delete all active except selected
    const navItemRow = e.target.closest(".nav-item-row");
    if (navItemRow) {
      const allNavRows = document.querySelectorAll(".nav-item-row");
      allNavRows.forEach((row) => row.classList.remove("active"));
      navItemRow.classList.add("active");
    }

    renderMainContent(navItemRow);
  });
}
