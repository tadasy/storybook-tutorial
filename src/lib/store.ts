import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TaskType } from "../components/Task";

const defaultTask = [
  {
    id: "1",
    title: "タスク01",
    state: "TASK_INBOX",
  },
  {
    id: "2",
    title: "タスク02",
    state: "TASK_INBOX",
  },
  {
    id: "3",
    title: "タスク03",
    state: "TASK_INBOX",
  },
  {
    id: "4",
    title: "タスク04",
    state: "TASK_INBOX",
  },
];

export type TaskBoxType = {
  tasks: TaskType[];
  status: string;
  error: string | null;
};

const TaskBoxData: TaskBoxType = {
  tasks: defaultTask,
  status: "idle",
  error: null,
};

type TodoType = {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
};

export const fetchTasks = createAsyncThunk("todos/fetchTodos", async (): Promise<TaskType[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1");
  const data = await response.json();
  const result = data.map((todo: TodoType): TaskType => ({
    id: `${todo.id}`,
    title: todo.title,
    state: todo.completed ? "TASK_ARCHIVED" : "TASK_INBOX",
  }));
  return result;
});


export const TasksSlice = createSlice({
  name: "taskbox",
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newState } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex].state = newState;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.tasks = [];
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = "failed";
        state.error = "something went wrong";
        state.tasks = [];
      });
  },  
});

export const { updateTaskState } = TasksSlice.actions;

const store = configureStore({
  reducer: {
    taskbox: TasksSlice.reducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
