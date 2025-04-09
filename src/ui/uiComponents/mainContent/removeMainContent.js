export default function () {
  const oldMainContent = document.querySelector(".main-content");
  if (oldMainContent) {
    document.body.removeChild(oldMainContent);
  }
}
