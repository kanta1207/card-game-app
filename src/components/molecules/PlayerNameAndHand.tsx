import React, { FC } from 'react'
import { Card } from '../../class/card';
import { HousePlayer, NonHousePlayer } from '../../class/player';
import { CardComponent } from '../atoms/CardComponent';

type Props = {
    player: NonHousePlayer | HousePlayer;
  };

export const PlayerNameAndHand  : FC<Props> = (props) => {
    const {player} = props;

  return (
    <div>
    <p className="text-lg font-bold pb-1">{player.name}</p>
  <div className="flex space-x-3 justify-center">
    {player.hand.map((card: Card, i) => (
      <div key={i}>
        <CardComponent card={card} />
      </div>
    ))}
  </div>
  </div>
  )
}
