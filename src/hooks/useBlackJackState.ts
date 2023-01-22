import { useCallback, useState } from "react";
import { BlackJackTable } from "../class/table";
export const useBlackJackState = () => {
  const [table,setTable] = useState(new BlackJackTable())
  const [gamePhase, setGamePhase] = useState<
    "betting" | "playerAction" | "houseAction" | "result"
  >("betting");
  const [isUserTurn, setIsUserTurn] = useState(false);

  const setUserName = useCallback((userName : string)=>{
    setTable(table=>{
      console.log("userName")
      table.setUserName(userName);
      return table
    })
  },[]) 

  const onClickBetSubmit = useCallback((bet: number) => {
    if (table.userPlayer.chips >= bet) {
      setTable((table) => {
        table.userPlayer.setBet(bet);
        table.makeAIBets();
        return table;
      });
      setGamePhase("playerAction");
    } else {
      alert("Not enough amount of chips.");
      return;
    }
  },[]);

  return {table,gamePhase,isUserTurn,setUserName,onClickBetSubmit};
};
