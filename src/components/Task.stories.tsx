import Task from "./Task";

export default {
  component: Task,
  title: "Task",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    task: {
      id: "1",
      title: "タスク名",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};

export const LongTitle = {
  args: {
    task: {
      ...Default.args.task,
      title: "これでChromaticは独自のビルドプロセスをスキップし、あなたが事前にnpmを使って生成したStorybookビルドを使用します。skip: buildパラメータが内部ビルドプロセスをスキップさせ、storybookBuildDirで既にビルドされたディレクトリを指定します。",
    },
  },
};