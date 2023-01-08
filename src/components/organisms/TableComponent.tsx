import { FC } from "react";
import { useRecoilValue } from "recoil";
import { Table } from "../../class/table";
import { gamePhaseAtom } from "../../recoil/atom/gamePhaseAtom";
import { tableAtom } from "../../recoil/atom/tableAtom";
import { PlayerComponent } from "../molecules/PlayerComponent";


type Props = {
  table : Table;
}
export const TableComponent : FC<Props> = (props) => {
  const {table} = props;
  const gamePhase = useRecoilValue(gamePhaseAtom) 
  return (
    <div className="h-full">
      {gamePhase === "betting" ? 
      <div className="h-full flex justify-center items-center">
        <p className="font-bold text-lg flex">
          gamelog
          {table.gameLog}
        </p>
      </div>
       : 
        <>
        <div className="flex justify-center">
        <PlayerComponent player={table.player4} />
      </div>
      <div className="w-full flex justify-between px-3">
        <PlayerComponent player={table.player1} />
        <PlayerComponent player={table.player3} />
      </div>
      <div className="flex justify-center">
        <PlayerComponent player={table.player2} />
      </div>
        </>
      }
    </div>
  );
};
