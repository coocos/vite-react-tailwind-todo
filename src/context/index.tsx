import { createContext } from "react";
import { State } from "../types";
import { Action } from "../reducers";
import { v4 as uuid4 } from "uuid";

export function getInitialState(): State {
  return {
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
}

type ContextValue = {
  state: State;
  dispatch: (action: Action) => void;
};

export const TaskContext = createContext<ContextValue>({} as ContextValue);
