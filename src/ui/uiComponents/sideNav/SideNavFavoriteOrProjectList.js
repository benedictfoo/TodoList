import createElement from "../../uiFunctions/createElement";
import SideNavFavoriteOrProject from "./SideNavFavoriteOrProject";

export default function (favoriteProjects, classes) {
  const list = createElement(
    "ul",
    { class: classes },
    ...favoriteProjects.map((project) => SideNavFavoriteOrProject(project))
  );
  return list;
}
