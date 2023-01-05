import { FC, ReactNode } from "react"
import {AiFillHome} from "react-icons/ai"

type Props = {
  children : ReactNode;
}
export const GamePageLayout : FC<Props> = ({children}) => {
  return (
    <div className="bg-[#1D4434] h-screen text-[#ffffff]">
      <div className="absolute top-0 left-1">
        <AiFillHome size="1.5rem" onClick={()=>alert()}/>
      </div>
      {children}
    </div>
  )
}
