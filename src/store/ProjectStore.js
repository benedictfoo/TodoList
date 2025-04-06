import { getTasksFromStore } from "./TaskStore.js";

let store = [
  {
    name: "Project 1",
    color: "HotPink",
    favorited: false,
    id: "2e58f2fa-1ede-4f6b-9274-a1490c8ee327",
  },
  {
    name: "Project 2",
    color: "DarkOrange",
    favorited: false,
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
    favorited: false,
    id: "e660a3fd-6c8a-4e8e-be46-665a9cabb530",
  },
];
export function getProjectsFromStore() {
  return store;
}
export function addProjectToStore(project) {
  store.push(project);
}
export function deleteProjectByIdFromStore(id) {
  store = store.filter((project) => project.id !== id);
}

export function deleteProjectIfNoChildrenFromStore(projectId) {
  const foundOtherWithProject = getTasksFromStore().find(
    (task) => task.projectId === projectId
  );
  // if none left delete from project store
  if (!foundOtherWithProject) {
    deleteProjectByIdFromStore(projectId);
    // get projects
    console.log(getTasksFromStore());
    console.log(getProjectsFromStore());
  }
}
