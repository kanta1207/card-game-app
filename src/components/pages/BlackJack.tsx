import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Table } from "../../class/table";
import { gamePhaseAtom } from "../../recoil/atom/gamePhaseAtom";
import { tableAtom } from "../../recoil/atom/tableAtom";
import { GamePageLayout } from "../layout/GamePageLayout";
import { StakeHandler } from "../molecules/StakeHandler";
import { TableComponent } from "../organisms/TableComponent";

export const BlackJack = () => {
  console.log("black Jack")
  const {userName,gameType,isInEn } = useLocation().state;
  const [gamePhase,setGamePhase] = useRecoilState(gamePhaseAtom);
  const [table, setTable] = useState(new Table(gameType,userName));

  const onClickBetSubmit = (bet: number) => {
    if (table.player2.chips >= bet) {
      setTable((table) => {
        table.player2.setBet(bet);
        table.makeAIBets();
        return table;
      });
      setGamePhase("action")
    } else {
      alert("Not enough amount of chips.");
    }
  };

  return (
    <GamePageLayout>
      <div className="h-full xl:flex">
        <div className="h-[80%]">
          <TableComponent table={table}/>
        </div>
        <div className="h-[20%]">
          <StakeHandler onClickSubmit={onClickBetSubmit} />
        </div>
      </div>
    </GamePageLayout>
  );
};
