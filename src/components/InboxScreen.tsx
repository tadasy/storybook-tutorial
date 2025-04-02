import { useEffect } from "react";
import TaskList, { useAppDispatch, useAppSelector } from "./TaskList";
import { fetchTasks } from "../lib/store";

export default function InboxScreen() {
  const {error} = useAppSelector((state) => state.taskbox);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  if (error) {
    return (
      <div className="page lists-show">
          <div className="wrapper-message">
            <span className="icon-face-sad" />
            <p className="title-message">Oh no!</p>
            <p className="subtitle-message">{error}</p>
          </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">Taskbox</h1>
      </nav>
      <TaskList />
    </div>
  );
};