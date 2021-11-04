export type Task = {
  id: string;
  done: boolean;
  description: string;
};

export type State = {
  tasks: Task[];
  theme: "dark" | "light";
};
