import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  className?: string;
  disabled?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  element = 'p',
  weight = 'normal',
  className,
  disabled = false,
  ...props
}) => {
  const Component = element;

  const baseClasses = 'font-sans leading-relaxed transition-colors duration-200';

  const variantClasses = {
    primary: 'text-[var(--color-primary)]',
    secondary: 'text-[var(--color-secondary)]',
    success: 'text-[var(--color-success)]',
    danger: 'text-[var(--color-danger)]',
    warning: 'text-[var(--color-warning)]',
  };

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <Component
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        weightClasses[weight],
        disabledClasses,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;