import { FC } from "react";
import {BsFillSuitClubFill,BsFillSuitDiamondFill,BsFillSuitHeartFill,BsFillSuitSpadeFill} from "react-icons/bs"

type Props = {
  rank : string;
  suit :  "H" | "D" | "S" | "C";
}

let suitHash = {
  "H" : <BsFillSuitHeartFill size="3rem" color="#E91C25"/>,
  "D" : <BsFillSuitDiamondFill size="3rem" color="#E91C25"/>,
  "S" : <BsFillSuitSpadeFill size="3rem" color="#000000"/>,
  "C" : <BsFillSuitClubFill size="3rem" color="#000000"/>
}

export const CardComponent : FC<Props> = (props) => {
  const {rank,suit} = props;
  return (
    <div className="bg-[#ffffff] shadow-sm rounded-sm text-center p-4">
      <div className={`${suit === "H" || suit === "D" ? "text-[#E91C25]" : "text-[#000000]"} space-y-2`}>
        {suitHash[suit]}
        <p className="font-bold">{rank}</p>
      </div>
    </div>
  )
}
