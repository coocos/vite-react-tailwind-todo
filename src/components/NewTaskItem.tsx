import React, { useState, useContext, FormEvent } from "react";
import { TaskContext } from "../context";

const PLACEHOLDER_DESCRIPTION = "Example task description";

export const NewTaskItem = () => {
  const [description, setDescription] = useState(PLACEHOLDER_DESCRIPTION);
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

  const clearPlaceholder = () => {
    if (description == PLACEHOLDER_DESCRIPTION) {
      setDescription("");
    }
  };

  const restorePlaceholder = () => {
    if (description.length == 0) {
      setDescription(PLACEHOLDER_DESCRIPTION);
    }
  };

  return (
    <form className="flex gap-4" onSubmit={addTask}>
      <input
        className="flex-grow p-6 text-gray-600 rounded-xl border shadow-sm"
        type="text"
        value={description}
        onChange={updateDescription}
        onFocus={clearPlaceholder}
        onBlur={restorePlaceholder}
      />
    </form>
  );
};
