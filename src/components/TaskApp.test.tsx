import { render, fireEvent } from "@testing-library/react";
import { within } from "@testing-library/dom";
import TaskApp from "./TaskApp";

describe("Task app", () => {
  // JSDOM does not define matchMedia which is used to detect dark mode
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
    })),
  });

  test("add new task", async () => {
    const app = render(<TaskApp />);

    const input = app.getByRole("textbox");
    fireEvent.change(input, {
      target: {
        value: "Test task",
      },
    });
    fireEvent.submit(app.getByRole("form"));

    const task = within(app.getByRole("list")).getByText("Test task");
    expect(task).toBeInTheDocument();
  });

  test("remove task", async () => {
    const app = render(<TaskApp />);

    const task = app.getAllByRole("listitem")[0];
    const deleteButton = within(task).getByRole("button");
    fireEvent.click(deleteButton);

    expect(task).not.toBeInTheDocument();
  });
});
