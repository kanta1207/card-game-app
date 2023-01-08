import { FC } from "react";

type Props = {
    gameLog : string;
}

export const GameLog : FC<Props> = (props) => {
    const {gameLog} = props;
  return (
    <div>
      <p className="font-bold text-lg">{
        gameLog
    }</p>  
    </div>
    
  )
}
