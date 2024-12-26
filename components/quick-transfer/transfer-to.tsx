import { Contact } from "@/services/get-contacts"
import { Image } from "../image"
import { Typography } from "../typography"

type Props = {
  contact: Contact
}

export const TransferTo = ({ contact }: Props) => {
  return (
    <li className="flex flex-col items-center gap-2">
      <Image isAvatar src={`/${contact.avatar}-70x70.jpg`} alt={contact.name} className="hidden desktop:block h-[70px] w-[70px]" />
      <Image isAvatar src={`/${contact.avatar}-50x50.jpg`} alt={contact.name} className="desktop:hidden h-[50px] w-[50px]"
        width="50px"
        height="50px" />
      <div className="flex gap-1 flex-col items-center">
        <Typography type="body" size="md" weight="normal" color="gray-1000" >{contact.name}</Typography>
        <Typography type="body" size="custom-15" weight="normal" color="blue-200" >{contact.role}</Typography>
      </div>
    </li>
  )
}