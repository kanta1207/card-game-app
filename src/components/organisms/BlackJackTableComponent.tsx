import { FC } from "react";
import { BlackJackTable } from "../../class/table";
import { HousePlayerComponent } from "../molecules/HousePlayerComponent";
import { NonHousePlayerComponent } from "../molecules/NonHousePlayerComponent";

type Props = {
    table : BlackJackTable
}
export const BlackJackTableComponent : FC<Props> = (props) => {
    const {table} = props;
    return (
        <div className="h-full">
            <div className="flex justify-center">
            <HousePlayerComponent player={table.house} />
          </div>
          <div className="w-full flex justify-between px-3">
            <NonHousePlayerComponent player={table.aiPlayer1} />
            <NonHousePlayerComponent player={table.aiPlayer2} />
          </div>
          <div className="flex justify-center">
            <NonHousePlayerComponent player={table.userPlayer} />
          </div>
        </div>
      );
}
