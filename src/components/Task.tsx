export type TaskType = {
    id: string;
    title: string;
    state: string;
};

type TaskProps = {
    task: TaskType;
    onPinTask: (task: TaskType) => void;
    onArchiveTask: (task: TaskType) => void;
};

export default function Task({ task: { id, title, state }, onPinTask, onArchiveTask }: TaskProps) {
    return (
        <div className={`list-item ${state}`}>
            <label htmlFor="checked" className="checkbox">
                <input
                    type="checkbox"
                    name="checked"
                    id={`archiveTask-${id}`}
                />
                <span
                  className="checkbox-custom"
                  onClick={() => onArchiveTask({ id, title, state })}
                  aria-label={`archiveTask-${id}`}
                />
            </label>
            <label htmlFor="title" className="title" aria-label={title}>
                <input
                    type="text"
                    value={title}
                    readOnly={true}
                    name="title"
                    placeholder="タスク名"
                />
            </label>

            {state !== "TASK_ARHCIVED" && (
                <button
                  className="pin-button"
                  id={`pinTask-${id}`}
                  aria-label={`pinTask-${id}`}
                  onClick={() => onPinTask({ id, title, state })}
                >
                    <span className="icon-star" />
                </button>
            )}
        </div>
    );
}
