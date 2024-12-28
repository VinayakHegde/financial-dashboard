import { Typography } from '../typography';
import { Magnifier } from './magnifier';
import Link from 'next/link';

type CustomErrorProps = {
  title: string;
  message: string;
  children?: React.ReactNode;
};

const ReturnHome = () => (
  <Link
    href="/"
    className="flex items-center justify-center bg-dark-gray text-white px-4 h-10 rounded-10"
  >
    Return to Dashboard
  </Link>
);

export const CustomError = ({
  title,
  message,
  children = <ReturnHome />,
}: Readonly<CustomErrorProps>) => {
  return (
    <section className="flex items-center w-full h-fit justify-center flex-col gap-4 desktop:gap-10 py-7">
      <Magnifier aria-hidden="true" />
      <div className="flex flex-col items-center gap-9">
        <Typography type="heading-1">{title}</Typography>
        <div className="flex flex-col items-center gap-7 text-center px-6">
          <Typography type="body" size="lg" weight="normal" color="dark-gray">
            {message}
          </Typography>
          {children}
        </div>
      </div>
    </section>
  );
};
