import { Image } from '../image';
import { Typography } from '../typography';

type Props = {
  amount: number;
};
export const Transfer = ({ amount }: Props) => {
  return (
    <div className="flex justify-between items-center py-5">
      <Typography type="body" size="md" weight="normal" color="steel-blue">
        Write Amount
      </Typography>
      <div className="flex desktop:w-265px bg-ghost-white rounded-50 items-center">
        <input
          className="flex-1 flex desktop:w-140px h-full bg-transparent rounded-l-50 indent-8 text-steel-blue outline-none"
          type="number"
          placeholder={amount.toFixed(2)}
        />
        <button className="bg-dark-gray h-50px text-white rounded-50 px-6 flex gap-2 items-center min-w-100px desktop:min-w-125px">
          <div className="hidden desktop:flex items-center gap-2">
            <Typography type="body" size="md" weight="medium" color="inherit">
              Send
            </Typography>
          </div>
          <div className="desktop:hidden">
            <Typography
              type="body"
              size="custom-13"
              weight="medium"
              color="inherit"
            >
              Send
            </Typography>
          </div>
          <Image
            src="/send.svg"
            alt="send"
            className="!w-4 !h-4 desktop:!w-6 desktop:!h-6"
          />
        </button>
      </div>
    </div>
  );
};
