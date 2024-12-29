import { Contact } from '@/services/get-contacts';
import { Typography } from '../typography';
import dynamic from 'next/dynamic';

const Image = dynamic(
  () => import('@/components/image').then((mod) => mod.Image),
  { ssr: false },
);

type Props = {
  contact: Contact;
};

export const TransferTo = ({ contact }: Props) => {
  return (
    <li className="flex flex-col items-center gap-2">
      <Image
        isAvatar
        src={`/${contact.avatar}-70x70.jpg`}
        alt={contact.name}
        className="hidden desktop:block"
        width={70}
        height={70}
      />
      <Image
        isAvatar
        src={`/${contact.avatar}-50x50.jpg`}
        alt={contact.name}
        className="desktop:hidden"
        width={50}
        height={50}
      />
      <div className="flex gap-1 flex-col items-center">
        <Typography type="body" size="md" weight="normal" color="dark-gray">
          {contact.name}
        </Typography>
        <Typography
          type="body"
          size="custom-15"
          weight="normal"
          color="steel-blue"
        >
          {contact.role}
        </Typography>
      </div>
    </li>
  );
};
