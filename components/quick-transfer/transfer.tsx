import { Image } from "../image"
import { Typography } from "../typography"

type Props = {
  amount: number
}
export const Transfer = ({ amount }: Props) => {
  return (
    <div className="flex justify-between items-center py-5">
      <Typography type="body" size="md" weight="normal" color="blue-200">Write Amount</Typography>
      <div className="flex desktop:w-[265px] bg-gray-500 rounded-[50px] items-center">
        <input className="flex-1 flex desktop:w-[140px] h-full bg-transparent rounded-l-[50px] indent-8 text-blue-200 outline-none" type="number" placeholder={amount.toFixed(2)} />
        <button className="bg-gray-1000 h-[50px] text-white rounded-[50px] px-6 flex gap-2 items-center min-w-[100px] desktop:min-w-[125px]">
          <div className="hidden desktop:flex items-center gap-2">
            <Typography type="body" size="md" weight="medium" color="inherit">Send</Typography>
          </div>
          <div className="desktop:hidden">
            <Typography type="body" size="custom-13" weight="medium" color="inherit">Send</Typography>
          </div>
          <Image src="/send.svg" alt="send" className="!w-4 !h-4 desktop:!w-6 desktop:!h-6" />
        </button>
      </div>
    </div>
  )
}