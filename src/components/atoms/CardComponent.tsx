import { FC } from "react";
import {
  BsFillSuitClubFill,
  BsFillSuitDiamondFill,
  BsFillSuitHeartFill,
  BsFillSuitSpadeFill,
} from "react-icons/bs";
import {GiClown} from  "react-icons/gi"
import { Card } from "../../class/card";

type Props = {
  card : Card
};

let suitHash = {
  "H": <BsFillSuitHeartFill color="#E91C25" />,
  "D": <BsFillSuitDiamondFill  color="#E91C25" />,
  "S": <BsFillSuitSpadeFill color="#000000" />,
  "C": <BsFillSuitClubFill  color="#000000" />,
  "Joker" : <GiClown size="2rem" color="#000000"/>
};

export const CardComponent: FC<Props> = (props) => {
  const { card } = props;
  return (
    <div className="bg-[#ffffff] rounded-sm text-center p-2">
      {card.isOpen ?  <div
        className={`${
          card.suit === "H" || card.suit === "D" ? "text-[#E91C25]" : "text-[#000000]"
        } space-y-2`}
      >
        {suitHash[card.suit]}
        <p className="font-bold">{card.rank}</p>
      </div> : <div className="font-bold text-lg text-[#000000]">?</div>}
    </div>
  );
};
