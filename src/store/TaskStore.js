let store = [
  {
    title: "Task 1",
    description: "This is a task description.",
    id: "3d976551-9a06-4359-9cf4-29e33f1a907f",
    date: 1743922184643,
    priority: 2,
    completed: false,
    projectId: "759617b5-968d-43d8-840c-2672637ac7c3",
  },
  {
    title: "Task 2",
    description: "This is a task description.",
    id: "582445b1-8bd1-491c-94fe-0259617c0d2b",
    date: 1743922184643,
    priority: 4,
    completed: false,
    projectId: "e486f830-0ca6-456f-bec4-413e8d8929b8",
  },
  {
    title: "Task 3",
    description: "This is a task description.",
    id: "60b5a424-28e9-4094-b757-cde51f383502",
    date: 1743922184643,
    priority: 3,
    completed: true,
    projectId: "5f22c1ce-e391-4f03-a823-ffeeb014fa05",
  },
  {
    title: "Task 4",
    description: "This is a task description.",
    id: "e78db4d9-dd40-4cd6-99d4-fbdb47f0988c",
    date: 1743922184643,
    priority: 1,
    completed: true,
    projectId: "700328e8-ea4b-435e-a6f9-66bd73b7ab5c",
  },
  {
    title: "Task 5",
    description: "This is a task description.",
    id: "2d3546ff-d68f-435d-bb59-8731bff3025d",
    date: 1743922184645,
    priority: 1,
    completed: false,
    projectId: "f7e54883-6916-46d9-be99-e23a3950acb8",
  },
];
export function getTasksFromStore() {
  return store;
}
export function addTasktoStore(task) {
  store.push(task);
}
