import { FC } from "react";
import { BlackJackTable } from "../../class/table";
import { HousePlayerComponent } from "../molecules/HousePlayerComponent";
import { BlackJackNonHousePlayerComponent } from "../molecules/BlackJackNonHousePlayerComponent";

type Props = {
    table : BlackJackTable
}
export const BlackJackTableComponent : FC<Props> = (props) => {
    const {table} = props;
    return (
        <div className="h-full w-full">
            <div className="flex justify-center">
            <HousePlayerComponent player={table.house} />
          </div>
          <div className="w-full flex justify-between xl:justify-evenly px-3">
            <BlackJackNonHousePlayerComponent player={table.aiPlayer1} />
            <BlackJackNonHousePlayerComponent player={table.aiPlayer2} />
          </div>
          <div className="flex justify-center">
            <BlackJackNonHousePlayerComponent player={table.userPlayer} />
          </div>
        </div>
      );
}
