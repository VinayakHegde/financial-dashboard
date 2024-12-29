import NextImage, { ImageProps as NextImageProps } from 'next/image';
import React from 'react';

type CustomImageProps = {
  isAvatar?: boolean;
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
} & Omit<NextImageProps, 'src' | 'alt' | 'width' | 'height'>;

export const Image: React.FC<CustomImageProps> = ({
  isAvatar = false,
  alt,
  src,
  className = '',
  width = 24,
  height = 24,
  priority = false,
  ...props
}) => {
  const additionalClasses = isAvatar ? 'rounded-full' : '';
  return (
    <NextImage
      src={src}
      alt={alt}
      className={`object-cover ${additionalClasses} ${className}`}
      width={width}
      height={height}
      {...(priority ? { priority } : { loading: 'lazy' })}
      {...props}
    />
  );
};
