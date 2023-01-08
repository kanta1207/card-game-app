import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { gameTypeArray } from "../../class/gameType";
import { gamePhaseAtom } from "../../recoil/atom/gamePhaseAtom";
import { Button } from "../atoms/Button";

export const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [gameTypeIndex, setGameTypeIndex] = useState(0);
  const [isInEn, setIsInEn] = useState(true);
  const setGamePhase = useSetRecoilState(gamePhaseAtom)

  const onClickStartGame = () => {
    setGamePhase("betting")
    navigate(gameTypeArray[gameTypeIndex].pagePath,{state : {userName,isInEn,gameType : gameTypeArray[gameTypeIndex]}})
  };

  const onChangeLang = (lang: string) => {
    //languageを受け取って英語・日本語設定
    if (!isInEn && lang === "English") setIsInEn(true);
    else if (isInEn && lang === "Japanese") setIsInEn(false);
  };

  return (
    <div className="bg-[#1D4434] h-screen text-[#ffffff]">
      <div className="space-y-6 py-[50%] sm:py-[30%] md:py-[20%] w-[40%] ml-[30%]">
        <div className="space-y-2">
          <label className="block">English/日本語</label>
          <select
            name="language"
            className="rounded-full w-full py-2 text-[#000000]"
            onChange={(e) => onChangeLang(e.target.value)}
          >
            <option value="English">
              English
            </option>
            <option value="Japanese">日本語</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="block">
            {isInEn ? "Your Name" : "ユーザーネーム"}
          </label>
          <input
            type="text"
            className="rounded-full w-full p-2 text-[#000000]"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block">
            {isInEn ? "Choose a game" : "ゲームを選ぶ"}
          </label>
          <select
            name="gameType"
            className="rounded-full w-full p-2 text-[#000000]"
            onChange={(e) => setGameTypeIndex(Number(e.target.value))}
          >
            {gameTypeArray.map((gameType,index)=>(
              <option value={index} key={gameType.gameNameEn}>
              {isInEn ? gameType.gameNameEn : gameType.gameNameJa}
            </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center">
          <Button buttonType="green" mediaQueries="p-4" onClick={()=>onClickStartGame()}>
            {isInEn ?  "Start a game !" : "ゲームスタート！"}
          </Button>
        </div>
      </div>
    </div>
  );
};
