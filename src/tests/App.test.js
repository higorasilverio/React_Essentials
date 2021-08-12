import React from "react";
import { render, screen } from "@testing-library/react";
import App from '../components/App'
import { MemoryRouter } from "react-router-dom";

test("Renders an h1", () => {
    render(<App />, {wrapper: MemoryRouter})
    expect(screen.getByText(/routes/i)).toBeInTheDocument()
})