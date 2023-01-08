import { FC } from "react";
import { Card } from "../../class/card";
import { Player } from "../../class/player"
import { CardComponent } from "../atoms/CardComponent";

type Props = {
  player : Player;
}

export const PlayerComponent : FC<Props>= (props) => {
  const {player} = props;
  // player.hand = [new Card("A","H"),new Card("10","C"),new Card("2","D")]
  return (
    <div className="text-center">
       <p className="text-lg font-bold pb-1">
        {player.name}
      </p>
      <div className="flex space-x-3">
        {player.hand.map((card : Card,i)=>(
          <div key={i}>
            <CardComponent card={card}/>
          </div>
      ))}
      </div>
      <div className="pt-1">
        <p>Status : </p>
        <p>Bet : {player.bet}</p>
        <p>Chips :{player.chips}</p>
      </div>
    </div>
  )
}
