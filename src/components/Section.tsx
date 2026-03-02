// Section Component - Container with consistent padding and max-width

import React from 'react';
import classNames from 'classnames';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  bgColor?: 'white' | 'gray' | 'blue';
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  (
    { className, children, fullWidth = false, bgColor = 'white', ...props },
    ref,
  ) => {
    const bgClasses = {
      white: 'bg-white',
      gray: 'bg-gray-50',
      blue: 'bg-blue-600',
    };

    return (
      <section
        ref={ref}
        className={classNames(bgClasses[bgColor], className)}
        {...props}
      >
        <div className={classNames('px-4 py-12 sm:px-6 lg:px-8', !fullWidth && 'max-w-6xl mx-auto')}>
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
      h1: 'text-4xl font-bold',
      h2: 'text-3xl font-bold',
      h3: 'text-2xl font-bold',
    };

    return (
      <HeadingTag
        ref={ref as any}
        className={classNames(
          headingClasses[level],
          'text-gray-900 mb-4',
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
        'text-lg text-gray-600 mb-8',
        center && 'text-center',
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
