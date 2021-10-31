import React, { useState, useContext, FormEvent } from "react";
import { TaskContext } from "../context";

export const NewTaskItem = () => {
  const [description, setDescription] = useState("Example task description");
  const { dispatch } = useContext(TaskContext);

  const updateDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
  };

  const addTask = (event: FormEvent) => {
    event.preventDefault();
    dispatch({
      type: "ADD_TASK",
      description,
    });
    setDescription("");
  };

  return (
    <form className="flex gap-4" onSubmit={addTask}>
      <input
        className="flex-grow p-4 rounded-xl border-4 border-green-400"
        type="text"
        value={description}
        onChange={updateDescription}
      />
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
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </form>
  );
};
