import React, { useState, useContext, useRef, FormEvent } from "react";
import { v4 as uuid4 } from "uuid";
import { TaskContext } from "../context";

const PLACEHOLDER_DESCRIPTION = "Example task description";

export const NewTaskItem = () => {
  const [description, setDescription] = useState(PLACEHOLDER_DESCRIPTION);
  const { dispatch } = useContext(TaskContext);
  const inputElement = useRef<HTMLInputElement>(null);

  const updateDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
  };

  const addTask = (event: FormEvent) => {
    event.preventDefault();
    dispatch({
      id: uuid4(),
      type: "ADD_TASK",
      description,
    });
    setDescription("");
    inputElement.current?.blur();
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
        className="flex-grow p-6 text-gray-600 rounded-xl border shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-300"
        type="text"
        ref={inputElement}
        value={description}
        onChange={updateDescription}
        onFocus={clearPlaceholder}
        onBlur={restorePlaceholder}
      />
    </form>
  );
};
