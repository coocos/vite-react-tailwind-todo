import { createContext } from "react";

export type Task = {
  id: number;
  done: boolean;
  description: string;
};

type State = {
  tasks: Task[];
};

export const initialState: State = {
  tasks: [
    {
      id: 1,
      done: true,
      description: "Task #1",
    },
    {
      id: 2,
      done: false,
      description: "Task #2",
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

export const reducer = (
  state: typeof initialState,
  action: Action
): typeof initialState => {
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
  state: {
    tasks: [
      {
        id: 1,
        done: false,
        description: "Placeholder",
      },
    ],
  },
  dispatch: (action: Action) => {},
});
