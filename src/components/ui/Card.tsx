import { HTMLAttributes, forwardRef } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'primary', size = 'md', disabled = false, children, className = '', ...props }, ref) => {
    const baseClasses = 'rounded-lg border shadow-sm transition-all duration-200 ease-in-out';

    const variantClasses = {
      primary: 'border-blue-200 bg-white hover:shadow-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-blue-800 dark:bg-gray-800',
      secondary: 'border-gray-200 bg-white hover:shadow-md focus-within:ring-2 focus-within:ring-gray-500 focus-within:ring-offset-2 dark:border-gray-600 dark:bg-gray-800',
      success: 'border-green-200 bg-white hover:shadow-md focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 dark:border-green-800 dark:bg-gray-800',
      danger: 'border-red-200 bg-white hover:shadow-md focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 dark:border-red-800 dark:bg-gray-800',
      warning: 'border-amber-200 bg-white hover:shadow-md focus-within:ring-2 focus-within:ring-amber-500 focus-within:ring-offset-2 dark:border-amber-800 dark:bg-gray-800'
    };

    const sizeClasses = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };

    const disabledClasses = disabled
      ? 'opacity-60 pointer-events-none cursor-not-allowed'
      : '';

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`.trim();

    return (
      <div
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';