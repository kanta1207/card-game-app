import { FC, ReactNode } from "react"
import {AiFillHome} from "react-icons/ai"
import { useNavigate } from "react-router-dom";

type Props = {
  children : ReactNode;
}
export const GamePageLayout : FC<Props> = ({children}) => {
  const navigate = useNavigate();

  return (
    <div className="h-screen text-[#ffffff]">
      <div className="absolute top-0 left-1">
        <AiFillHome size="1.5rem" onClick={()=>navigate("/")}/>
      </div>
      {children}
    </div>
  )
}
