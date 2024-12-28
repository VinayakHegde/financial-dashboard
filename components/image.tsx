/* eslint-disable @next/next/no-img-element */
type ImageProps = {
  isAvatar?: boolean;
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
};
export const Image = ({ isAvatar, alt, src, className }: ImageProps) => {
  const additianalClass = isAvatar ? 'rounded-full' : 'w-6 h-6';
  return (
    <img
      src={src}
      alt={alt}
      className={`${additianalClass} ${className}`}
      loading="lazy"
    />
  );
};
