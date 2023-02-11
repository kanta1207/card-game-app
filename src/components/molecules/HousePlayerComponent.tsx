import { FC } from "react";
import { HousePlayer} from "../../class/player";
import { PlayerNameAndHand } from "./PlayerNameAndHand";

type Props = {
  player: HousePlayer;
};

export const HousePlayerComponent: FC<Props> = (props) => {
  const { player } = props;
  return (
    <div className="text-center outline-none p-3 md:p-8 shadow-lg rounded-lg shadow-[#000000]">
      <PlayerNameAndHand player={player}/>
      <div className="pt-1">
        <p className="font-bold">{player.status}</p>
      </div>
    </div>
  );
};
