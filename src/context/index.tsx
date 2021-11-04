import { createContext } from "react";
import { State, Task } from "../types";
import { v4 as uuid4 } from "uuid";

export const initialState: State = {
  tasks: [
    {
      id: uuid4(),
      done: false,
      description: "Create application",
    },
    {
      id: uuid4(),
      done: true,
      description: "Configure Tailwind",
    },
    {
      id: uuid4(),
      done: true,
      description: "Install Vite",
    },
  ],
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
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
    }
  | {
      type: "TOGGLE_THEME";
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
            id: uuid4(),
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
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme == "light" ? "dark" : "light",
      };
  }
};

export const TaskContext = createContext({
  state: initialState,
  dispatch: (action: Action) => {},
});
