import Task from "../../backend/constructor/Task";

const acceptableFields = Object.keys(Task({}));
export default function (filter) {
  return Object.fromEntries(
    Object.entries(filter).filter(([key]) => acceptableFields.includes(key))
  );
}
