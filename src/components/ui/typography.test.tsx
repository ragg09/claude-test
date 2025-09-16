import { render, screen } from '@testing-library/react';
import Typography from './typography';

// Mock CSS variables
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: (prop: string) => {
      const mockValues: Record<string, string> = {
        '--color-primary': '#3b82f6',
        '--color-secondary': '#6b7280',
        '--color-success': '#10b981',
        '--color-danger': '#ef4444',
        '--color-warning': '#f59e0b',
      };
      return mockValues[prop] || '';
    },
  }),
});

describe('Typography Component', () => {
  it('renders with default props', () => {
    render(<Typography>Hello World</Typography>);
    const element = screen.getByText('Hello World');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('P');
  });

  it('renders with different HTML elements', () => {
    render(<Typography element="h1">Heading 1</Typography>);
    const element = screen.getByRole('heading', { level: 1 });
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('H1');
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Typography variant="primary">Primary text</Typography>);
    let element = screen.getByText('Primary text');
    expect(element).toHaveClass('text-[var(--color-primary)]');

    rerender(<Typography variant="secondary">Secondary text</Typography>);
    element = screen.getByText('Secondary text');
    expect(element).toHaveClass('text-[var(--color-secondary)]');

    rerender(<Typography variant="success">Success text</Typography>);
    element = screen.getByText('Success text');
    expect(element).toHaveClass('text-[var(--color-success)]');

    rerender(<Typography variant="danger">Danger text</Typography>);
    element = screen.getByText('Danger text');
    expect(element).toHaveClass('text-[var(--color-danger)]');

    rerender(<Typography variant="warning">Warning text</Typography>);
    element = screen.getByText('Warning text');
    expect(element).toHaveClass('text-[var(--color-warning)]');
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Typography size="sm">Small text</Typography>);
    let element = screen.getByText('Small text');
    expect(element).toHaveClass('text-sm');

    rerender(<Typography size="md">Medium text</Typography>);
    element = screen.getByText('Medium text');
    expect(element).toHaveClass('text-base');

    rerender(<Typography size="lg">Large text</Typography>);
    element = screen.getByText('Large text');
    expect(element).toHaveClass('text-lg');
  });

  it('applies weight classes correctly', () => {
    const { rerender } = render(<Typography weight="normal">Normal weight</Typography>);
    let element = screen.getByText('Normal weight');
    expect(element).toHaveClass('font-normal');

    rerender(<Typography weight="medium">Medium weight</Typography>);
    element = screen.getByText('Medium weight');
    expect(element).toHaveClass('font-medium');

    rerender(<Typography weight="semibold">Semibold weight</Typography>);
    element = screen.getByText('Semibold weight');
    expect(element).toHaveClass('font-semibold');

    rerender(<Typography weight="bold">Bold weight</Typography>);
    element = screen.getByText('Bold weight');
    expect(element).toHaveClass('font-bold');
  });

  it('applies disabled state correctly', () => {
    render(<Typography disabled>Disabled text</Typography>);
    const element = screen.getByText('Disabled text');
    expect(element).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  it('applies custom className', () => {
    render(<Typography className="custom-class">Custom text</Typography>);
    const element = screen.getByText('Custom text');
    expect(element).toHaveClass('custom-class');
  });

  it('applies base classes', () => {
    render(<Typography>Base text</Typography>);
    const element = screen.getByText('Base text');
    expect(element).toHaveClass('font-sans');
    expect(element).toHaveClass('transition-colors');
    expect(element).toHaveClass('duration-200');
  });
});