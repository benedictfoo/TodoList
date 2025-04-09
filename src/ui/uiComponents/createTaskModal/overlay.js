import createElement from "../createElement";

export default function (modalElement) {
  const overlay = createElement(
    "div",
    { class: "task-create-overlay" },
    modalElement
  );

  overlay.addEventListener("click", (e) => {
    console.log(modalElement);
    if (!modalElement.contains(e.target)) {
      overlay.remove();
    }
  });
  return overlay;
}
