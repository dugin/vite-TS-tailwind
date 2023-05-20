import { render, screen } from "./test/utils";
import App from "./App.tsx";
import { vi } from "vitest";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

// Mock GET request to /users when param `searchText` is 'John'
// arguments for reply are (status, data, headers)
mock.onGet("/users", { params: { searchText: "John" } }).reply(200, {
  users: [{ id: 1, name: "John Smith" }],
});

describe("App.tsx", () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers();
  });

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers();
  });

  // vi.setSystemTime(new Date("04/04/2023"));
  it("should have test as copy", () => {
    render(<App />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
