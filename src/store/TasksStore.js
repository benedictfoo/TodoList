export default function TasksStore() {
  return [
    {
      id: 1,
      title: "Create wireframes",
      date: 8640000000000000,
      priority: "high",
    },
    {
      id: 2,
      title: "Set up project repository",
      date: 8640000000000000,
      priority: "medium",
    },
    {
      id: 3,
      title: "Write homepage content",
      date: 8640000000000000,
      priority: "low",
    },
    {
      id: 4,
      parentId: 1,
      title: "Research competitors' websites",
      date: 8640000000000000,
    },
    {
      id: 5,
      parentId: 1,
      title: "Sketch wireframe designs",
      date: 8640000000000000,
    },
    {
      id: 6,
      parentId: 4,
      title: "Check out design trends",
      date: 8640000000000000,
    },
    {
      id: 7,
      parentId: 2,
      title: "Create repo on GitHub",
      date: 8640000000000000,
    },
  ];
}
