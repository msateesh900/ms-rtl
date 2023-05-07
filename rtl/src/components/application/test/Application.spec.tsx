import { screen, render } from "@testing-library/react"

import { Application } from "../Application"

describe("Test Application", () => {
  test("reners correctly", () => {
    render(<Application />)
  })
})
