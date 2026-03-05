// Section Component - Container with consistent padding and max-width

import React from 'react';
import classNames from 'classnames';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  bgColor?: 'white' | 'gray' | 'blue' | 'light-gray';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  (
    { className, children, fullWidth = false, bgColor = 'white', padding = 'lg', ...props },
    ref,
  ) => {
    const bgClasses = {
      white: 'bg-white',
      gray: 'bg-gray-50',
      'light-gray': 'bg-gray-100',
      blue: 'bg-gradient-to-br from-blue-600 to-blue-700',
    };

    const paddingClasses = {
      sm: 'px-4 py-8 sm:px-6 lg:px-8',
      md: 'px-4 py-12 sm:px-6 lg:px-8',
      lg: 'px-4 py-16 sm:px-6 lg:px-8',
      xl: 'px-4 py-20 sm:px-6 lg:px-8',
    };

    return (
      <section
        ref={ref}
        className={classNames(bgClasses[bgColor], className)}
        {...props}
      >
        <div className={classNames(paddingClasses[padding], !fullWidth && 'max-w-7xl mx-auto')}>
          {children}
        </div>
      </section>
    );
  },
);

Section.displayName = 'Section';

export default Section;

// Section Title Component
interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3';
  center?: boolean;
}

export const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ className, children, level = 'h2', center = false, ...props }, ref) => {
    const HeadingTag = level;
    const headingClasses = {
      h1: 'text-5xl sm:text-6xl font-bold tracking-tight',
      h2: 'text-4xl sm:text-5xl font-bold tracking-tight',
      h3: 'text-3xl sm:text-4xl font-bold',
    };

    return (
      <HeadingTag
        ref={ref as any}
        className={classNames(
          headingClasses[level],
          'text-gray-900 mb-6 leading-tight',
          center && 'text-center',
          className,
        )}
        {...props}
      >
        {children}
      </HeadingTag>
    );
  },
);

SectionTitle.displayName = 'SectionTitle';

// Section Subtitle Component
interface SectionSubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children: React.ReactNode;
  center?: boolean;
}

export const SectionSubtitle = React.forwardRef<HTMLParagraphElement, SectionSubtitleProps>(
  ({ className, children, center = false, ...props }, ref) => (
    <p
      ref={ref}
      className={classNames(
        'text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl',
        center && 'text-center mx-auto',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  ),
);

SectionSubtitle.displayName = 'SectionSubtitle';

// Section Grid Component
interface SectionGridProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  cols?: number;
}

export const SectionGrid = React.forwardRef<HTMLDivElement, SectionGridProps>(
  ({ className, children, cols = 3, ...props }, ref) => {
    const colClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    };

    return (
      <div
        ref={ref}
        className={classNames('grid gap-6', colClasses[cols as keyof typeof colClasses] || 'grid-cols-3', className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

SectionGrid.displayName = 'SectionGrid';
