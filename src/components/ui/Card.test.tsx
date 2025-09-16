import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  it("renders with default props", () => {
    render(<Card>Card content</Card>);
    const card = screen.getByText("Card content");
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("border-blue-200"); // primary variant
    expect(card).toHaveClass("p-6"); // md size
  });

  it("renders with primary variant", () => {
    render(<Card variant="primary">Primary Card</Card>);
    const card = screen.getByText("Primary Card");
    expect(card).toHaveClass("border-blue-200");
    expect(card).toHaveClass("focus-within:ring-blue-500");
  });

  it("renders with secondary variant", () => {
    render(<Card variant="secondary">Secondary Card</Card>);
    const card = screen.getByText("Secondary Card");
    expect(card).toHaveClass("border-gray-200");
    expect(card).toHaveClass("focus-within:ring-gray-500");
  });

  it("renders with success variant", () => {
    render(<Card variant="success">Success Card</Card>);
    const card = screen.getByText("Success Card");
    expect(card).toHaveClass("border-green-200");
    expect(card).toHaveClass("focus-within:ring-green-500");
  });

  it("renders with danger variant", () => {
    render(<Card variant="danger">Danger Card</Card>);
    const card = screen.getByText("Danger Card");
    expect(card).toHaveClass("border-red-200");
    expect(card).toHaveClass("focus-within:ring-red-500");
  });

  it("renders with warning variant", () => {
    render(<Card variant="warning">Warning Card</Card>);
    const card = screen.getByText("Warning Card");
    expect(card).toHaveClass("border-amber-200");
    expect(card).toHaveClass("focus-within:ring-amber-500");
  });

  it("renders with small size", () => {
    render(<Card size="sm">Small Card</Card>);
    const card = screen.getByText("Small Card");
    expect(card).toHaveClass("p-4");
  });

  it("renders with medium size (default)", () => {
    render(<Card size="md">Medium Card</Card>);
    const card = screen.getByText("Medium Card");
    expect(card).toHaveClass("p-6");
  });

  it("renders with large size", () => {
    render(<Card size="lg">Large Card</Card>);
    const card = screen.getByText("Large Card");
    expect(card).toHaveClass("p-8");
  });

  it("handles disabled state", () => {
    render(<Card disabled>Disabled Card</Card>);
    const card = screen.getByText("Disabled Card");
    expect(card).toHaveClass("opacity-60");
    expect(card).toHaveClass("pointer-events-none");
    expect(card).toHaveClass("cursor-not-allowed");
  });

  it("accepts custom className", () => {
    render(<Card className="custom-class">Custom Card</Card>);
    const card = screen.getByText("Custom Card");
    expect(card).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = jest.fn();
    render(<Card ref={ref}>Card with Ref</Card>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it("passes through other HTML attributes", () => {
    render(
      <Card data-testid="custom-card" aria-label="Custom aria label">
        Card
      </Card>
    );
    const card = screen.getByTestId("custom-card");
    expect(card).toHaveAttribute("aria-label", "Custom aria label");
  });

  it("renders complex content correctly", () => {
    render(
      <Card variant="primary" size="lg">
        <h3>Card Title</h3>
        <p>Card description</p>
        <button>Action</button>
      </Card>
    );

    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card description")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
  });

  it("has proper base styling classes", () => {
    render(<Card>Test Card</Card>);
    const card = screen.getByText("Test Card");
    expect(card).toHaveClass("rounded-lg");
    expect(card).toHaveClass("border");
    expect(card).toHaveClass("shadow-sm");
    expect(card).toHaveClass("transition-all");
    expect(card).toHaveClass("duration-200");
    expect(card).toHaveClass("ease-in-out");
  });
});