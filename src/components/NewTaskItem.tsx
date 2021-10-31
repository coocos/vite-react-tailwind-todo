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
        className="flex-grow p-6 text-gray-600 rounded-xl border shadow-sm"
        type="text"
        value={description}
        onChange={updateDescription}
      />
    </form>
  );
};
