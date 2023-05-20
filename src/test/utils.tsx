import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

const queryClient = new QueryClient();

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>
      </QueryClientProvider>
    ),
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
