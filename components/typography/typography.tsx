'use client';

type TypographyProps = HeadingProps | BodyProps;

export const Typography = (props: TypographyProps) => {
  if (props.type === 'body') {
    return <Body {...props} />;
  }

  return <Heading {...props} />;
};

type BodyProps = {
  children: string;
  type: 'body';
  isSecondaryFont?: boolean;
  size?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'custom-13'
    | 'custom-15'
    | 'custom-17'
    | 'custom-22'
    | 'custom-25';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'x-bold';
  color?:
    | 'navy-blue'
    | 'steel-blue'
    | 'sky-blue'
    | 'medium-gray'
    | 'ghost-white'
    | 'dark-gray'
    | 'inherit';
  uppercase?: boolean;
} & React.HTMLAttributes<HTMLParagraphElement>;

const getTextSize = (size: BodyProps['size']) => {
  switch (size) {
    case 'xxs':
      return 'text-xxs';
    case 'sm':
      return 'text-sm';
    case 'md':
      return 'text-md';
    case 'lg':
      return 'text-lg';
    case 'custom-13':
      return 'text-13';
    case 'custom-15':
      return 'text-15';
    case 'custom-17':
      return 'text-17';
    case 'custom-22':
      return 'text-22';
    case 'custom-25':
      return 'text-25';
    default:
      return 'text-xs';
  }
};

const getFontFamily = (isSecondaryFont: BodyProps['isSecondaryFont']) => {
  return isSecondaryFont ? 'font-secondary' : 'font-primary';
};

const getFontWeight = (weight: BodyProps['weight']) => {
  switch (weight) {
    case 'medium':
      return 'font-medium';
    case 'normal':
      return 'font-normal';
    case 'bold':
      return 'font-bold';
    case 'x-bold':
      return 'font-extrabold';
    default:
      return 'font-semibold';
  }
};

const getTextColor = (color: BodyProps['color']) => {
  switch (color) {
    case 'medium-gray':
      return 'text-medium-gray';
    case 'steel-blue':
      return 'text-steel-blue';
    case 'sky-blue':
      return 'text-sky-blue';
    case 'ghost-white':
      return 'text-ghost-white';
    case 'dark-gray':
      return 'text-dark-gray';
    case 'inherit':
      return 'text-inherit';
    default:
      return 'text-navy-blue';
  }
};

const Body = ({
  children,
  size = 'sm',
  isSecondaryFont = false,
  weight = 'semibold',
  color = 'navy-blue',
  uppercase,
  ...rest
}: BodyProps) => {
  return (
    <p
      className={`${getTextSize(size)} ${getFontFamily(isSecondaryFont)} ${getFontWeight(weight)} ${getTextColor(color)} ${
        uppercase ? 'uppercase' : ''
      }`}
      {...rest}
    >
      {children}
    </p>
  );
};

type HeadingProps = {
  children: string;
  type: 'heading-1' | 'heading-2';
} & React.HTMLAttributes<HTMLHeadingElement>;

const Heading = ({ children, type, ...rest }: HeadingProps) => {
  if (type === 'heading-1') {
    return (
      <h1
        className="text-28 text-navy-blue font-primary font-semibold"
        {...rest}
      >
        {children}
      </h1>
    );
  }
  return (
    <h2 className="text-22 text-navy-blue font-primary font-semibold" {...rest}>
      {children}
    </h2>
  );
};
