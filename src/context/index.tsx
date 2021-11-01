import { createContext } from "react";
import { State, Task } from "../types";

export const initialState: State = {
  tasks: [
    {
      id: 1,
      done: false,
      description: "Create application",
    },
    {
      id: 2,
      done: true,
      description: "Configure Tailwind",
    },
    {
      id: 3,
      done: true,
      description: "Install Vite",
    },
  ],
};

type Action =
  | {
      type: "ADD_TASK";
      description: Task["description"];
    }
  | {
      type: "DELETE_TASK";
      id: Task["id"];
    }
  | {
      type: "CHECK_TASK";
      id: Task["id"];
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            done: false,
            // FIXME: Use UUIDs or hashes for IDs instead
            id: state.tasks.length + 1,
            description: action.description,
          },
        ],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id != action.id),
      };
    case "CHECK_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id == action.id
            ? {
                ...task,
                done: !task.done,
              }
            : task
        ),
      };
  }
};

export const TaskContext = createContext({
  state: initialState,
  dispatch: (action: Action) => {},
});
