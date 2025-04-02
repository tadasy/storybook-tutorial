import { Provider } from "react-redux";
import InboxScreen from "./InboxScreen";
import store from "../lib/store";
import { Meta } from "@storybook/react";
import { http, HttpResponse } from 'msw'
import { MockedState } from "./TaskList.stories";
import { fireEvent, waitFor, waitForElementToBeRemoved, within } from "@storybook/test";

const meta: Meta<typeof InboxScreen> = {
  component: InboxScreen,
  title: "InboxScreen",
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ["autodocs"],
};
export default meta;

export const Default = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://jsonplaceholder.typicode.com/todos?userId=1", () => {
          return HttpResponse.json(MockedState.tasks);
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitForElementToBeRemoved(await canvas.findByTestId("loading"));
    await waitFor(async () => {
      await fireEvent.click(canvas.getByLabelText("pinTask-1"));
      await fireEvent.click(canvas.getByLabelText("pinTask-3"));
      await fireEvent.click(canvas.getByLabelText("archiveTask-5"));
    });
  },
};

export const Error = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://jsonplaceholder.typicode.com/todos?userId=1", () => {
          return HttpResponse.json({error: "something went wrong"}, {status: 500});
        }),
      ],
    },
  },
};