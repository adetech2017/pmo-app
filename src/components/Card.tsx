// Card Component - Modern Professional Design

import React from 'react';
import classNames from 'classnames';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  variant?: 'elevated' | 'outlined' | 'flat';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, children, variant = 'elevated', ...props }, ref) => {
    const variantClasses = {
      elevated: 'bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100',
      outlined: 'bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300',
      flat: 'bg-gray-50 rounded-xl border border-gray-200',
    };

    return (
      <div
        ref={ref}
        className={classNames(
          'p-6 transition-all duration-200',
          variantClasses[variant],
          hover && 'hover:shadow-lg cursor-pointer hover:-translate-y-0.5',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';

export default Card;

// Card Header Component
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames('mb-4', className)}
      {...props}
    >
      {children}
    </div>
  ),
);

CardHeader.displayName = 'CardHeader';

// Card Title Component
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={classNames('text-lg font-bold text-gray-900 mb-2', className)}
      {...props}
    >
      {children}
    </h3>
  ),
);

CardTitle.displayName = 'CardTitle';

// Card Description Component
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={classNames('text-gray-600 text-sm leading-relaxed', className)}
      {...props}
    >
      {children}
    </p>
  ),
);

CardDescription.displayName = 'CardDescription';

// Card Content Component
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames('mt-4', className)}
      {...props}
    >
      {children}
    </div>
  ),
);

CardContent.displayName = 'CardContent';

// Card Footer Component
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames('mt-6 flex gap-2', className)}
      {...props}
    >
      {children}
    </div>
  ),
);

CardFooter.displayName = 'CardFooter';
