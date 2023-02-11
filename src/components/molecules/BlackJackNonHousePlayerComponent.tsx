import { FC } from "react";
import { NonHousePlayer } from "../../class/player";
import { PlayerNameAndHand } from "./PlayerNameAndHand";

type Props = {
  player: NonHousePlayer;
};

export const BlackJackNonHousePlayerComponent: FC<Props> = (props) => {
  const { player } = props;
  return (
    <div className="text-center outline-none p-3 md:p-8 shadow-lg rounded-lg shadow-[#000000]">
      <PlayerNameAndHand player={player} />
      <div className="pt-1 font-bold">
        <p>Status : {player.status}</p>
        <p>Chip : {player.chips}</p>
        <p>Bet : {player.bet}</p>
      </div>
    </div>
  );
};
