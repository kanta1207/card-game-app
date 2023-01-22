import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BlackJackTable } from "../../class/table";
import { useBlackJackState } from "../../hooks/useBlackJackState";
import { Button } from "../atoms/Button";
import { GamePageLayout } from "../layout/GamePageLayout";
import { StakeHandler } from "../molecules/StakeHandler";
import { BlackJackTableComponent } from "../organisms/BlackJackTableComponent";

export const BlackJackPage = () => {
  console.log("blackJackPage");
  const { userName, isInEn } = useLocation().state;
  const {table,gamePhase,isUserTurn,setUserName,onClickBetSubmit} = useBlackJackState();

  useEffect(()=>{
    setUserName(userName)
  },[]);

  console.log(table)

  return (
    <GamePageLayout>
      {gamePhase === "betting" ? (
        <div className="py-10">
          <div className="text-center">
            <p>You have ${table.userPlayer.chips} left.</p>
            <p>How much are you going to bet?</p>
            <p></p>
          </div>
          <StakeHandler onClickSubmit={onClickBetSubmit} />
        </div>
      ) : (
        <div className="h-full xl:flex">
          <div className="h-[80%]">
            <BlackJackTableComponent table={table}/>
          </div>
          <div className="h-[20%]">
          </div>
        </div>
      )}
    </GamePageLayout>
  );
};
