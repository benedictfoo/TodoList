import createElement from "../createElement";
export default function () {
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
  // favoriteProjects.forEach(project=>);
  const list = createElement(
    "ul",
    { class: "nav-favorite-list" },
    ...favoriteProjects.map((project) => SideNavFavorite(project))
  );
  return list;
}
function SideNavFavorite(project) {
  const iconButton = createElement(
    "button",
    {},
    createElement("i", { class: "fa-solid fa-hashtag" })
  );
  const span = createElement("span", {}, project.name);
  const row = createElement(
    "row",
    {
      class: "nav-favorite-row nav-item-row",
      "data-id": project.id,
    },
    iconButton,
    span
  );
  row.querySelector("button").style.color = project.color;
  return row;
}
