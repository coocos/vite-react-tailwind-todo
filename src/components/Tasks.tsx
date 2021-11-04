import React, { useCallback, useContext } from "react";

import { Task } from "../types";
import { TaskContext } from "../context";

type TaskItemProps = Task & {
  onDelete: (id: number) => void;
  onCheck: (id: number) => void;
};

const CheckboxIcon = ({ done }: { done: boolean }) => (
  <div className="p-4 text-purple-400 dark:text-gray-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 ${done ? "opacity-100 " : "opacity-0"}`}
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
  </div>
);

const DeleteButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="p-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition duration-250 ease-in-out hover:scale-125"
  >
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
);

const TaskItem = ({
  id,
  done,
  description,
  onDelete,
  onCheck,
}: TaskItemProps) => (
  <li
    onClick={() => onCheck(id)}
    className="flex items-center p-2 gap-4 bg-white dark:bg-gray-700 first:rounded-t-2xl last:rounded-b-2xl border-gray-200 dark:border-gray-800 border-l border-r border-t last:border-b shadow-sm cursor-pointer text-gray-600 dark:text-gray-300"
  >
    <CheckboxIcon done={done} />
    <div
      className={`flex-1 select-none ${
        done ? "text-gray-300 dark:text-gray-600" : null
      }`}
    >
      {description}
    </div>
    <DeleteButton onClick={() => onDelete(id)} />
  </li>
);

const MemoizedTaskItem = React.memo(TaskItem);

export const Tasks = () => {
  const { state, dispatch } = useContext(TaskContext);

  const onDelete = useCallback(
    (id: number) =>
      dispatch({
        type: "DELETE_TASK",
        id,
      }),
    [dispatch]
  );

  const onCheck = useCallback(
    (id: number) => {
      dispatch({
        type: "CHECK_TASK",
        id,
      });
    },
    [dispatch]
  );

  return (
    <ul className="mt-4">
      {state.tasks.map((task) => (
        <MemoizedTaskItem
          key={task.id}
          onDelete={onDelete}
          onCheck={onCheck}
          {...task}
        />
      ))}
    </ul>
  );
};
