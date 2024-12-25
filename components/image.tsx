
type ImageProps = {
  isAvatar?: boolean;
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
};
export const Image = ({ isAvatar, ...props }: ImageProps) => {
  return isAvatar ? (
    <img
      {...props}
      className={`rounded-full ${props.className}`}
      loading="lazy"
    />
  ) : (
    <img
      src={props.src}
      alt={props.alt}
      className={`w-6 h-6 ${props.className}`}
      loading="lazy"
    />
  )
}