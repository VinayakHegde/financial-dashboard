type TypographyProps = HeadingProps | BodyProps;

export const Typography = (props: TypographyProps) => {

  if (props.type === 'body') {
    return <Body {...props} />
  }

  return <Heading {...props} />
}
type BodyProps = {
  children: string;
  type: 'body';
  isSecondaryFont?: boolean;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'custom-13' | 'custom-15' | 'custom-17' | 'custom-22' | 'custom-25';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'x-bold';
  color?: 'blue-300' | 'blue-200' | 'blue-100' | 'gray-300' | 'gray-500' | 'gray-1000' | 'inherit';
  uppercase?: boolean;
};
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
      return 'text-custom-13';
    case 'custom-15':
      return 'text-custom-15';
    case 'custom-17':
      return 'text-custom-17';
    case 'custom-22':
      return 'text-custom-22';
    case 'custom-25':
      return 'text-custom-25';
    default:
      return 'text-xs';
  }
}

const getFontFamily = (isSecondaryFont: BodyProps['isSecondaryFont']) => {
  if (isSecondaryFont) {
    return 'font-secondary';
  }
  return 'font-primary';
}

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
}

const getTextColor = (color: BodyProps['color']) => {
  switch (color) {
    case 'gray-300':
      return 'text-gray-300';
    case 'blue-200':
      return 'text-blue-200';
    case 'blue-100':
      return 'text-blue-100';
    case 'gray-300':
      return 'text-gray-300';
    case 'gray-500':
      return 'text-gray-500';
    case 'gray-1000':
      return 'text-gray-1000';
    case 'inherit':
      return 'text-inherit';
    default:
      return 'text-blue-300';
  }
}
const Body = ({
  children,
  size = 'sm',
  isSecondaryFont = false,
  weight = 'semibold',
  color = 'blue-300',
  uppercase,
}: BodyProps) => {

  return (
    <p className={`${getTextSize(size)} ${getFontFamily(isSecondaryFont)} ${getFontWeight(weight)} ${getTextColor(color)} ${uppercase ? 'uppercase' : ''}`}>
      {children}
    </p>
  )
}

type HeadingProps = {
  children: string;
  type: 'heading-1' | 'heading-2';
};

const Heading = (props: HeadingProps) => {
  if (props.type === 'heading-1') {
    return <h1 className="text-custom-28 text-blue-300 font-primary font-semibold">{props.children}</h1>
  }
  return (
    <h2 className="text-custom-22 text-blue-300 font-primary font-semibold">
      {props.children}
    </h2>
  )
}