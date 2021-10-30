import { useReducer } from "react";
import { Tasks } from "./Tasks";
import { NewTaskItem } from "./NewTaskItem";
import { initialState, reducer, TaskContext } from "./context";
import "./index.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      <header className="flex justify-center w-full p-4 bg-green-400">
        <h1 className="text-2xl text-gray-50">Tasks</h1>
      </header>
      <div className="flex flex-col gap-4 max-w-2xl my-4 mx-auto p-4">
        <NewTaskItem />
        <Tasks />
      </div>
    </TaskContext.Provider>
  );
}

export default App;
