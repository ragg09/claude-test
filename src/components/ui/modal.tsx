'use client';

import React, { useEffect } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  showCloseButton = true,
  closeOnOverlayClick = true,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !disabled) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose, disabled]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closeOnOverlayClick && !disabled) {
      onClose();
    }
  };

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
  };

  const variantClasses = {
    primary: 'border-[var(--color-primary)]',
    secondary: 'border-[var(--color-secondary)]',
    success: 'border-[var(--color-success)]',
    danger: 'border-[var(--color-danger)]',
    warning: 'border-[var(--color-warning)]',
  };

  const headerVariantClasses = {
    primary: 'bg-[var(--color-primary)] text-white',
    secondary: 'bg-[var(--color-secondary)] text-white',
    success: 'bg-[var(--color-success)] text-white',
    danger: 'bg-[var(--color-danger)] text-white',
    warning: 'bg-[var(--color-warning)] text-white',
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity ${
        disabled ? 'cursor-not-allowed opacity-50' : ''
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`
          relative w-full mx-4 bg-[var(--color-background)] rounded-lg shadow-xl border-2
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${disabled ? 'pointer-events-none' : ''}
          transform transition-all duration-200 scale-100
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {title && (
          <div className={`px-6 py-4 rounded-t-lg ${headerVariantClasses[variant]}`}>
            <h2 id="modal-title" className="text-lg font-semibold">
              {title}
            </h2>
          </div>
        )}

        {showCloseButton && (
          <button
            onClick={onClose}
            disabled={disabled}
            className={`
              absolute top-4 right-4 p-1 rounded-full transition-colors
              ${
                disabled
                  ? 'cursor-not-allowed opacity-50'
                  : 'hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]'
              }
              ${title ? 'text-white hover:bg-white/20' : 'text-[var(--color-foreground)]'}
            `}
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        <div className={`p-6 ${title ? 'pt-4' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;