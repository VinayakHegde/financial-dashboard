import { Button } from '../button';
import { Typography } from '../typography';
import dynamic from 'next/dynamic';

const Image = dynamic(() => import('@/components/image').then(mod => mod.Image), { ssr: false });

type Props = {
  amount: number;
};
export const Transfer = ({ amount }: Props) => {
  return (
    <div className="flex justify-between items-center py-4 desktop:py-5">
      <div className="hidden desktop:flex">
        <Typography type="body" size="md" weight="normal" color="steel-blue">
          Write Amount
        </Typography>
      </div>
      <div className="desktop:hidden flex flex-1">
        <Typography type="body" size="sm" weight="normal" color="steel-blue">
          Write Amount
        </Typography>
      </div>
      <div className="flex desktop:w-265px bg-ghost-white rounded-50 items-center">
        <input
          className="flex w-140px h-full bg-transparent rounded-l-50 indent-8 text-steel-blue outline-none"
          type="number"
          placeholder={amount.toFixed(2)}
        />
        <Button
          className="bg-dark-gray h-50px text-white rounded-50 px-6 flex gap-2 items-center min-w-100px desktop:min-w-125px"
          onClick={() => alert('Amount sent')}
        >
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
            className="hidden desktop:block"
            width={24}
            height={24}
          />
          <Image
            src="/send.svg"
            alt="send"
            className="desktop:hidden"
            width={16}
            height={16}
          />
        </Button>
      </div>
    </div>
  );
};
