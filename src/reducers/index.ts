import { Task, State } from "../types";

export type Action =
  | {
      id: Task["id"];
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
            id: action.id,
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
