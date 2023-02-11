import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BlackJackTable } from "../../class/table";
import { useBlackJackState } from "../../hooks/useBlackJackState";
import { Button } from "../atoms/Button";
import { GamePageLayout } from "../layout/GamePageLayout";
import { ActionSelector } from "../molecules/ActionSelector";
import { StakeHandler } from "../organisms/StakeHandler";
import { BlackJackTableComponent } from "../organisms/BlackJackTableComponent";

export const BlackJackPage = () => {
  console.log("blackJackPage");
  const { userName, isInEn } = useLocation().state;
  const {
    table,
    gamePhase,
    isUserTurn,
    isFirstRound,
    setUserName,
    onClickBetSubmit,
    userAction,
    onClickNextGame,
  } = useBlackJackState();

  useEffect(() => {
    setUserName(userName);
  }, []);
  console.log(table);

  return (
    <GamePageLayout>
      {gamePhase === "betting" ? (
        <StakeHandler
          onClickSubmit={onClickBetSubmit}
          chips={table.userPlayer.chips}
        />
      ) : (
        <div className="h-full">
          <div className="">
            <BlackJackTableComponent table={table} />
          </div>
          <div className="flex justify-center pt-3 font-bold">
            {isUserTurn ? (
              <>
                <ActionSelector
                  isFirstRound={isFirstRound}
                  userAction={userAction}
                />
              </>
            ) : gamePhase === "playerAction" ? (
              <p>{table.currentPlayer?.name} is playing...</p>
            ) : gamePhase === "houseAction" ? (
              <p>House is playing...</p>
            ) : gamePhase === "result" ? (
              <>
                <div className="text-center p-2 space-y-1">
                  <p className="font-bold">
                    {table.userPlayer.status === "Win"
                      ? "You won the game!"
                      : table.userPlayer.status === "Lose"
                      ? "You lost the game"
                      : "Draw!"}
                  </p><Button
                  buttonType="blue"
                  mediaQueries="p-4"
                  onClick={onClickNextGame}
                >
                  Next Game
                </Button>
                </div>
                
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </GamePageLayout>
  );
};
