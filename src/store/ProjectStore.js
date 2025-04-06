let store = [{ name: "Project1", color: "Crimson", favorited: false, id: 1 }];
export function getProjectsFromStore() {
  return store;
}
export function addProjectToStore(project) {
  store.push(project);
}
