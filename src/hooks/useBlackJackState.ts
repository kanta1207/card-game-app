import { tab } from "@testing-library/user-event/dist/tab";
import { useCallback, useState } from "react";
import { NonHousePlayer } from "../class/player";
import { BlackJackTable } from "../class/table";
export const useBlackJackState = () => {
  const [table, setTable] = useState(new BlackJackTable());
  const [gamePhase, setGamePhase] = useState<
    "betting" | "playerAction" | "houseAction" | "result"
  >("betting");
  const [isFirstRound, setIsFirstRound] = useState(true);
  const [isUserTurn, setIsUserTurn] = useState(false);

  const setUserName = useCallback((userName: string) => {
    setTable((table) => {
      table.setUserName(userName);
      return table;
    });
  }, []);

  const onClickBetSubmit = useCallback((bet: number) => {
    if (table.userPlayer.chips >= bet) {
      setTable((table) => {
        table.userPlayer.setBet(bet);
        table.makeAIBets();
        return table;
      });
      setGamePhase("playerAction");
      allPlayersAction();
    } else {
      alert("Not enough amount of chips.");
      return;
    }
  }, []);

  const userAction = useCallback(
    (action: "Stand" | "Hit" | "Double" | "Surrender") => {
      if (action === "Hit") table.actionHit(table.userPlayer);
      else if (action === "Double") table.actionDouble(table.userPlayer);
      else table.userPlayer.setStatus(action);
      changeCurrentPlayer(table.userPlayer);
      setIsUserTurn(false);
      allPlayersAction();
    },
    []
  );

  const allPlayersAction = useCallback((): void => {
    setTimeout(() => {
      console.log("allPlayerAction");
      let currentPlayer = table.currentPlayer;
      console.log(currentPlayer);
      if (currentPlayer !== null) {
        if (currentPlayer.getPlayerType() === "user") {
          setIsUserTurn(true);
          return;
        }
        // action
        isFirstRound
          ? table.playerInitialAction(currentPlayer)
          : table.playerAction(currentPlayer);
        changeCurrentPlayer(currentPlayer);
        return allPlayersAction();
      } else {
        table.house.setStatus("Playing");
        setGamePhase("houseAction");
        houseAction();
      }
    }, 2000);
  }, []);

  const houseAction = (): void => {
    const currentScore = table.getHandScore(table.house);
    const card = table.deck.drawOne();
    console.log(card);
    if (currentScore > 16 || card === undefined) {
      if (currentScore > 21) table.house.setStatus("Bust");
      else table.house.setStatus("Finished playing");
      table.allPlayerGameDecision();
      setGamePhase("result");
    } else {
      setTimeout(() => {
        setTable(table=>{
          table.house.takeACard(card);
          return table
        })
        return houseAction();
      }, 3000);
    }
  };

  const onClickNextGame = useCallback(()=>{
    table.prepareNextGame();
    setGamePhase("betting");
    setIsFirstRound(true);
  },[])

  const changeCurrentPlayer = (tempCurrentPlayer: NonHousePlayer) => {
    //if the current player is the last player in the player deque
    console.log(tempCurrentPlayer);
    if (tempCurrentPlayer === table.getPlayerDequeTail()) {
      table.setCurrentPlayer(table.getPlayerDequeHead());
      if (isFirstRound) setIsFirstRound(false);
    } else table.setCurrentPlayer(tempCurrentPlayer.nextPlayer);

    if (tempCurrentPlayer.status !== "Hit")
      table.dequeuePlayer(tempCurrentPlayer);
    if (table.getPlayerDequeHead() === null) table.setCurrentPlayer(null);
  };

  return {
    table,
    gamePhase,
    isUserTurn,
    isFirstRound,
    setUserName,
    onClickBetSubmit,
    userAction,
    onClickNextGame
  };
};
