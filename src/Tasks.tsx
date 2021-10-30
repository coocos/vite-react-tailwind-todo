import { useContext } from "react";
import { Task, TaskContext } from "./context";

type TaskItemProps = Task & {
  onDelete: (id: number) => void;
};

const TaskItem = ({ id, done, description, onDelete }: TaskItemProps) => {
  return (
    <li className="flex items-center p-4 gap-4 border-solid border-4 rounded-xl border-green-400">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <div className="flex-1">{description}</div>
      <button onClick={() => onDelete(id)} className="p-4 hover:text-red-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </li>
  );
};

export const Tasks = () => {
  const { state, dispatch } = useContext(TaskContext);

  const onDelete = (id: number) =>
    dispatch({
      type: "DELETE_TASK",
      id,
    });

  return (
    <ul>
      {state.tasks.map((task) => (
        <TaskItem key={task.id} onDelete={() => onDelete(task.id)} {...task} />
      ))}
    </ul>
  );
};
