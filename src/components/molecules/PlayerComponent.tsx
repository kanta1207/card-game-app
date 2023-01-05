import { FC } from "react";
import { Player } from "../../class/player"

type Props = {
  player : Player;
}

export const PlayerComponent : FC<Props>= (props) => {
  const {player} = props;
  return (
    <div>PlayerComponent</div>
  )
}
