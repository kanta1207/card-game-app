import { FC} from "react";
import { Button } from "../atoms/Button";
import { ChipButton } from "../atoms/ChipButton";

type Props = {
  isFirstRound: boolean;
  userAction : (action: "Stand" | "Hit" | "Double" | "Surrender") => void
};

export const ActionSelector: FC<Props> = (props) => {
  const {
    isFirstRound,
   userAction
  } = props;

  return (
    <div className="text-center space-y-2 py-2">
       <p className="font-bold">Your turn!</p>
      <div className="flex justify-center space-x-3">
        {isFirstRound ? (
          <ChipButton
            colorKey="yellow"
            mediaQueries="py-2 px-1 md:py-3 md:px-2"
            onClick={() => userAction("Double")}
          >
            Double
          </ChipButton>
        ) : (
          <></>
        )}
        <ChipButton
          colorKey="red"
          mediaQueries="py-2 px-4 md:py-3 md:px-6"
          onClick={() => userAction("Hit")}
        >
          Hit
        </ChipButton>
        <ChipButton
        colorKey="blue"
        mediaQueries="p-2 md:p-3"
          onClick={() => userAction("Stand")}
        >
          Stand
        </ChipButton>
        <ChipButton
          colorKey="green"
          mediaQueries="py-2 px-1 md:py-3 md:px-4"
          onClick={() => userAction("Surrender")}
        >
          Surrender
        </ChipButton>
      </div>
    </div>
  );
};
