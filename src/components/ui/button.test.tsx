import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-blue-600"); // primary variant
    expect(button).toHaveClass("px-4 py-2"); // md size
  });

  it("renders with primary variant", () => {
    render(<Button variant="primary">Primary Button</Button>);
    const button = screen.getByRole("button", { name: /primary button/i });
    expect(button).toHaveClass("bg-blue-600");
  });

  it("renders with secondary variant", () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByRole("button", { name: /secondary button/i });
    expect(button).toHaveClass("bg-white");
    expect(button).toHaveClass("border");
  });

  it("renders with success variant", () => {
    render(<Button variant="success">Success Button</Button>);
    const button = screen.getByRole("button", { name: /success button/i });
    expect(button).toHaveClass("bg-green-600");
  });

  it("renders with danger variant", () => {
    render(<Button variant="danger">Danger Button</Button>);
    const button = screen.getByRole("button", { name: /danger button/i });
    expect(button).toHaveClass("bg-red-600");
  });

  it("renders with warning variant", () => {
    render(<Button variant="warning">Warning Button</Button>);
    const button = screen.getByRole("button", { name: /warning button/i });
    expect(button).toHaveClass("bg-amber-500");
  });

  it("renders with small size", () => {
    render(<Button size="sm">Small Button</Button>);
    const button = screen.getByRole("button", { name: /small button/i });
    expect(button).toHaveClass("px-3 py-1.5 text-sm");
  });

  it("renders with medium size (default)", () => {
    render(<Button size="md">Medium Button</Button>);
    const button = screen.getByRole("button", { name: /medium button/i });
    expect(button).toHaveClass("px-4 py-2 text-base");
  });

  it("renders with large size", () => {
    render(<Button size="lg">Large Button</Button>);
    const button = screen.getByRole("button", { name: /large button/i });
    expect(button).toHaveClass("px-6 py-3 text-lg");
  });

  it("handles disabled state", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole("button", { name: /disabled button/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:opacity-50");
  });

  it("handles click events", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Clickable Button</Button>);
    const button = screen.getByRole("button", { name: /clickable button/i });

    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not trigger click when disabled", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(
      <Button onClick={handleClick} disabled>
        Disabled Button
      </Button>
    );
    const button = screen.getByRole("button", { name: /disabled button/i });

    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("accepts custom className", () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByRole("button", { name: /custom button/i });
    expect(button).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = jest.fn();
    render(<Button ref={ref}>Button with Ref</Button>);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });

  it("passes through other HTML attributes", () => {
    render(
      <Button data-testid="custom-button" aria-label="Custom aria label">
        Button
      </Button>
    );
    const button = screen.getByTestId("custom-button");
    expect(button).toHaveAttribute("aria-label", "Custom aria label");
  });
});
