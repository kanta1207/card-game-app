import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { gameTypeArray } from "../../class/gameType";
import { Button } from "../atoms/Button";

export const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [gameTypeIndex, setGameTypeIndex] = useState(0);

  const onClickStartGame = () => {
    navigate(gameTypeArray[gameTypeIndex].pagePath, { state: { userName } });
  };

  return (
    <div className="h-screen text-[#ffffff]">
      <div className="space-y-6 py-[50%] sm:py-[30%] md:py-[20%] w-[40%] ml-[30%]">
        <div className="space-y-2">
          <label className="block">Your Name</label>
          <input
            type="text"
            className="rounded-full w-full p-2 text-[#000000]"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block">Choose a game</label>
          <select
            name="gameType"
            className="rounded-full w-full p-2 text-[#000000]"
            onChange={(e) => setGameTypeIndex(Number(e.target.value))}
          >
            {gameTypeArray.map((gameType, index) => (
              <option value={index} key={gameType.gameName}>
                {gameType.gameName}
              </option>
            ))}
          </select>
        </div>
        <div className="text-center font-bold hover:cursor-pointer">
          <a
            className="underline"
            href={gameTypeArray[gameTypeIndex].gameDescriptionUrl}
          >
            Do you know the rules of {gameTypeArray[gameTypeIndex].gameName} ?
          </a>
        </div>
        <div className="flex justify-center">
          <Button
            buttonType="blue"
            mediaQueries="py-3 px-5 md:py-6 md:px-8 md:text-xl"
            onClick={() => onClickStartGame()}
          >
            Start a game !
          </Button>
        </div>
      </div>
    </div>
  );
};
