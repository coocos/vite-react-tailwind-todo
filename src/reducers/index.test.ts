import { v4 as uuid4 } from "uuid";
import { reducer } from "./index";
import { State } from "../types";

const initialState: State = {
  tasks: [],
  theme: "dark",
};

describe("task actions", () => {
  test("add new task", () => {
    const task = {
      id: uuid4(),
      description: "New task",
    };
    const state = reducer(initialState, {
      ...task,
      type: "ADD_TASK",
    });
    expect(state.tasks).toEqual([
      {
        ...task,
        done: false,
      },
    ]);
  });

  test("delete task", () => {
    const task = {
      id: uuid4(),
      description: "New task",
      done: true,
    };
    const state = reducer(
      {
        ...initialState,
        tasks: [task],
      },
      {
        type: "DELETE_TASK",
        id: task.id,
      }
    );
    expect(state.tasks).toEqual([]);
  });

  test("check task", () => {
    const task = {
      id: uuid4(),
      description: "New task",
      done: false,
    };
    const state = reducer(
      {
        ...initialState,
        tasks: [task],
      },
      {
        type: "CHECK_TASK",
        id: task.id,
      }
    );
    expect(state.tasks).toEqual([
      {
        ...task,
        done: true,
      },
    ]);
  });
});

describe("theme actions", () => {
  test("toggle theme from dark to light", () => {
    const state = reducer(
      {
        ...initialState,
        theme: "dark",
      },
      {
        type: "TOGGLE_THEME",
      }
    );
    expect(state.theme).toBe("light");
  });
  test("toggle theme from light to dark", () => {
    const state = reducer(
      {
        ...initialState,
        theme: "light",
      },
      {
        type: "TOGGLE_THEME",
      }
    );
    expect(state.theme).toBe("dark");
  });
});
