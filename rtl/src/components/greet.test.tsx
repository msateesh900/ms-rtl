import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

test("Greet renders Correctly", () => {
  render(<Greet />)
  const textElement = screen.getByText("Hello")
  expect(textElement).toBeInTheDocument()
})

test("Greet renders with a name ", () => {
  render(<Greet name="Vishwas" />)
  const textElement = screen.getByText("Hello Vishwas")
  expect(textElement).toBeInTheDocument()
})
