import { Player } from "../../class/player"
import { GamePageLayout } from "../layout/GamePageLayout"
import { PlayerComponent } from "../molecules/PlayerComponent"
import { StakeHandler } from "../molecules/StakeHandler"

export const BlackJack = () => {
  const samplePlayer = new Player("Test","user","black jack")
  return (
    <GamePageLayout> 
      <div className="flex justify-center">
        <PlayerComponent player={samplePlayer}/>
      </div>
        <div className="flex items-center justify-center h-full">
             <StakeHandler/>
        </div>
    </GamePageLayout>
  )
}
