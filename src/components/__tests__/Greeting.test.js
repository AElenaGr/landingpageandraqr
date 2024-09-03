import React from "react";
import { render } from "@testing-library/react";
import Greeting from "../src/components/greetings";

test("muestra un saludo con el nombre correcto", () => {
  const { getByText } = render(<Greeting name="Gatsby" />);
  expect(getByText("Hello, Gatsby!")).toBeInTheDocument();
});
