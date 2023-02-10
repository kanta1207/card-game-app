import { FC} from "react";
import { Button } from "../atoms/Button";

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
    <div className="text-center">
      <p className="font-bold">Your turn!</p>
      <div className="flex justify-center space-x-3">
        {isFirstRound ? (
          <Button
            buttonType="white"
            mediaQueries="p-3"
            onClick={() => userAction("Double")}
          >
            Double
          </Button>
        ) : (
          <></>
        )}
        <Button
          buttonType="white"
          mediaQueries="py-3 px-6"
          onClick={() => userAction("Hit")}
        >
          Hit
        </Button>
        <Button
          buttonType="white"
          mediaQueries="p-3"
          onClick={() => userAction("Stand")}
        >
          Stand
        </Button>
        <Button
          buttonType="white"
          mediaQueries="p-3"
          onClick={() => userAction("Surrender")}
        >
          Surrender
        </Button>
      </div>
    </div>
  );
};
