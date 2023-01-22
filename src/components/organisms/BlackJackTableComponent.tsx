import { FC } from "react";
import { BlackJackTable } from "../../class/table";
import { PlayerComponent } from "../molecules/PlayerComponent";

type Props = {
    table : BlackJackTable
}
export const BlackJackTableComponent : FC<Props> = (props) => {
    const {table} = props;
    return (
        <div className="h-full">
            <div className="flex justify-center">
            <PlayerComponent player={table.house} />
          </div>
          <div className="w-full flex justify-between px-3">
            <PlayerComponent player={table.aiPlayer1} />
            <PlayerComponent player={table.aiPlayer2} />
          </div>
          <div className="flex justify-center">
            <PlayerComponent player={table.userPlayer} />
          </div>
        </div>
      );
}
