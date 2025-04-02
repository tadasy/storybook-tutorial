import { useDispatch, useSelector } from "react-redux";
import Task, { TaskType } from "./Task";
import { AppDispatch, RootState, updateTaskState } from "../lib/store";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default function TaskList() {

  const tasks = useAppSelector((state) => {
    const tasksInOrder = [
      ...state.taskbox.tasks.filter((t) => t.state === "TASK_PINNED"),
      ...state.taskbox.tasks.filter((t) => t.state !== "TASK_PINNED"),
    ];
    const filteredTasks = tasksInOrder.filter(
      (task) => task.state !== "TASK_ARCHIVED"
    );
    return filteredTasks;
  });

  const dispatch = useAppDispatch();
  const pinTask = (task: TaskType) => {
    dispatch(updateTaskState({ id: task.id, newState: "TASK_PINNED" }));
  };
  // archiveTask
  const archiveTask = (task: TaskType) => {
    dispatch(updateTaskState({ id: task.id, newState: "TASK_ARCHIVED" }));
  };

  const { status } = useAppSelector((state) => state.taskbox);
  const loading = status === "loading";

  const Loadingrow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span><span>cool</span><span>state</span>
      </span>
    </div>
  )
  if (loading) {
    return (
      <div className="list-items" data-testid="loading" key={"loading"}>
      {Loadingrow}
      {Loadingrow}
      {Loadingrow}
      {Loadingrow}
      {Loadingrow}
      {Loadingrow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
    <div className="list-items" data-testid="empty">
      <div className="wrapper-message">
        <span className="icon-check" />
        <p className="title-message">You have no tasks.</p>
        <p className="subtitle-message">Sit back and relax.</p>
      </div>
    </div>
  )
  }

  return (
    <div className="list-item" data-testid="success">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onPinTask={(task: TaskType) => pinTask(task)}
          onArchiveTask={(task: TaskType) => archiveTask(task)}
        />
      ))}
    </div>
  );
}