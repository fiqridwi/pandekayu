import { render, screen } from "@testing-library/react";

import Navbar from "./Navbar";

test("renders nav item", () => {
  render(<Navbar />);

  screen.getAllByText();
});
