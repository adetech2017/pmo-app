// Hero Component

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
  children?: React.ReactNode;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundColor = 'bg-gradient-to-r from-blue-600 to-blue-800',
  height = 'lg',
  overlay = true,
  children,
  className,
}) => {
  const heightClasses = {
    sm: 'h-64',
    md: 'h-96',
    lg: 'h-screen',
  };

  return (
    <div
      className={classNames(
        'relative flex items-center justify-center overflow-hidden',
        heightClasses[height],
        className,
      )}
    >
      {/* Background Image */}
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
          {overlay && <div className="absolute inset-0 bg-black bg-opacity-40" />}
        </>
      ) : (
        <div className={classNames('absolute inset-0', backgroundColor)} />
      )}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl sm:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  );
};

export default Hero;
