// Hero Component - Modern Professional Design

import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  height?: 'sm' | 'md' | 'lg';
  overlay?: boolean;
  overlayOpacity?: 'light' | 'medium' | 'dark';
  children?: React.ReactNode;
  className?: string;
  titleSize?: string;
  alignment?: 'center' | 'left' | 'right';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundColor = 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900',
  height = 'lg',
  overlay = true,
  overlayOpacity = 'medium',
  children,
  className,
  titleSize = 'text-5xl sm:text-6xl lg:text-7xl',
  alignment = 'center',
}) => {
  const heightClasses = {
    sm: 'h-64',
    md: 'h-96',
    lg: 'h-screen',
  };

  const overlayClasses = {
    light: 'bg-black bg-opacity-20',
    medium: 'bg-black bg-opacity-40',
    dark: 'bg-black bg-opacity-60',
  };

  const alignmentClasses = {
    center: 'text-center items-center justify-center',
    left: 'text-left items-center justify-start',
    right: 'text-right items-center justify-end',
  };

  return (
    <div
      className={classNames(
        'relative flex overflow-hidden',
        heightClasses[height],
        alignmentClasses[alignment],
        className,
      )}
    >
      {/* Background with Gradient Overlay */}
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt={`${title} hero background`}
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
          {overlay && <div className={classNames('absolute inset-0', overlayClasses[overlayOpacity])} />}
        </>
      ) : (
        <div className={classNames('absolute inset-0', backgroundColor)} />
      )}

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
      </div>

      {/* Content */}
      <div className={classNames(
        'relative z-10 text-white px-4 sm:px-6 lg:px-8',
        alignment === 'center' && 'max-w-4xl',
        alignment !== 'center' && 'max-w-2xl'
      )}>
        <h1 className={classNames(
          titleSize,
          'font-bold leading-tight mb-6',
          'drop-shadow-lg'
        )}>
          {title}
        </h1>
        {subtitle && (
          <p className={classNames(
            'text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed',
            'drop-shadow-md max-w-3xl',
            alignment !== 'center' && 'mr-auto'
          )}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  );
};

export default Hero;
