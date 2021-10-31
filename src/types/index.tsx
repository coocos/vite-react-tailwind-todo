export type Task = {
  id: number;
  done: boolean;
  description: string;
};

export type State = {
  tasks: Task[];
};
