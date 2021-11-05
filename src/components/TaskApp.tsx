import { useReducer } from "react";
import { Header } from "./Header";
import { Tasks } from "./Tasks";
import { NewTaskItem } from "./NewTaskItem";
import { initialState, TaskContext } from "../context";
import { reducer } from "../reducers";

function TaskApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      <main className={state.theme}>
        <div className="min-h-screen bg-light-purple-split dark:bg-dark-purple-split">
          <Header />
          <div className="flex flex-col gap-4 max-w-2xl mx-auto p-4">
            <NewTaskItem />
            <Tasks />
          </div>
        </div>
      </main>
    </TaskContext.Provider>
  );
}

export default TaskApp;
