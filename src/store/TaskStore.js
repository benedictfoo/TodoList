let store = [
  {
    title: "Task 1",
    description: "This is a task description.",
    id: "3d976551-9a06-4359-9cf4-29e33f1a907f",
    date: 1743922184643,
    priority: 2,
    completed: false,
    projectId: "2e58f2fa-1ede-4f6b-9274-a1490c8ee327", // Project 1
  },

  {
    title: "Task 2",
    description: "This is a task description.",
    id: "582445b1-8bd1-491c-94fe-0259617c0d2b",
    date: 1743922184643,
    priority: 4,
    completed: false,
    projectId: "f24be39c-b029-4fac-8a8c-07f9d57b9a79", // Project 2
  },
  {
    title: "Task 3",
    description: "This is a task description.",
    id: "60b5a424-28e9-4094-b757-cde51f383502",
    date: 1743922184643,
    priority: 3,
    completed: true,
    projectId: "363b3e2b-448b-4bea-ba37-3ceb73154a6d", // Project 3
  },
  {
    title: "Task 4",
    description: "This is a task description.",
    id: "e78db4d9-dd40-4cd6-99d4-fbdb47f0988c",
    date: 1743922184643,
    priority: 1,
    completed: true,
    projectId: "e660a3fd-6c8a-4e8e-be46-665a9cabb530", // Project 4
  },
  {
    title: "Task 5",
    description: "This is a task description.",
    id: "2d3546ff-d68f-435d-bb59-8731bff3025d",
    date: 1743922184645,
    priority: 1,
    completed: false,
    projectId: "2e58f2fa-1ede-4f6b-9274-a1490c8ee327", // Project 1
  },
];
export function getTasksFromStore() {
  return store;
}
export function addTasktoStore(task) {
  store.push(task);
}
export function deleteTaskByIdFromStore(id) {
  store = store.filter((task) => task.id !== id);
}
