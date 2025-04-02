import TaskList from "./TaskList";
import * as TaskStories from "./Task.stories";
import { Meta } from "@storybook/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { TasksSlice } from "../lib/store";
import { TaskType } from "./Task";

const meta: Meta<typeof TaskList> = {
  component: TaskList,
  title: "TaskList",
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  excludeStories: /^MockedState$/,
};
export default meta;
type Story = typeof meta;

export const MockedState = {
  tasks: [
    { ...TaskStories.Default.args?.task, id: "1", title: "タスク1" },
    { ...TaskStories.Default.args?.task, id: "2", title: "タスク2" },
    { ...TaskStories.Default.args?.task, id: "3", title: "タスク3" },
    { ...TaskStories.Default.args?.task, id: "4", title: "タスク4" },
    { ...TaskStories.Default.args?.task, id: "5", title: "タスク5" },
    { ...TaskStories.Default.args?.task, id: "6", title: "タスク6" },
  ],
  status: "idle",
  error: null,
}

interface MockstoreProps {
  taskboxState: {
    tasks: Array<TaskType>;
    status: string;
    error: string | null;
  };
  children: React.ReactNode;
}

const Mockstore: React.FC<MockstoreProps> = ({ taskboxState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        taskbox: TasksSlice.reducer,
      },
      preloadedState: {
        taskbox: taskboxState,
      },
    })}
  >
    {children}
  </Provider>
);

export const Default: Story = {
  decorators: [
    (Story) => (
      <Mockstore taskboxState={MockedState}>
        <Story />
      </Mockstore>
    ),
  ],
};

export const WithPinnedTasks: Story = {
  decorators: [
    (Story) => {
      const pinnedTasks = [
        ...MockedState.tasks.slice(0, 5),
        {id: "6", title: "タスク6", state: "TASK_PINNED"},
      ];
      return (
      <Mockstore taskboxState={{...MockedState, tasks: pinnedTasks}}>
        <Story />
      </Mockstore>
    )},
  ],
};

export const Loading: Story = {
  decorators: [
    (Story) => (
      <Mockstore taskboxState={{...MockedState, status: "loading"}}>
        <Story />
      </Mockstore>
    ),
  ],
};
export const Empty: Story = {
  decorators: [
    (Story) => (
      <Mockstore taskboxState={{...MockedState, tasks: []}}>
        <Story />
      </Mockstore>
    ),
  ],
};
