import { FC, useState } from "react";
import { Button } from "../atoms/Button";
import { ChipButton } from "../atoms/ChipButton";

const stakes = [5, 20, 50, 100];

type Props = {
  onClickSubmit: (bet: number) => void;
  chips: number;
};

export const StakeHandler: FC<Props> = (props) => {
  const { onClickSubmit, chips } = props;
  const [totalStake, setTotalStake] = useState(0);

  const onClickChangeMoney = (oparator: "plus" | "minus", stake: number) => {
    if (oparator === "plus") setTotalStake((totalStake) => totalStake + stake);
    else if (totalStake >= stake)
      setTotalStake((totalStake) => totalStake - stake);
  };

  return (
    <div>
      <div className="py-10">
        <div className="text-center font-bold text-md md:text-xl">
          <p className="text-2xl md:text-4xl py-2">How much are you going to bet?</p>
          <p>You have <span className="text-xl">${chips}</span> left.</p>
          <p></p>
        </div>
        <div className="space-y-3 py-3 md:space-y-6 md:py-6">
          {stakes.map((stake) => (
            <div className="text-center" key={stake}>
              <p className="font-bold text-lg md:text-2xl">${stake}</p>
              <div className="w-full flex space-x-1 justify-center items-center">
                <ChipButton
                  colorKey="blue"
                  mediaQueries="py-1 px-2"
                  onClick={() => onClickChangeMoney("plus", stake)}
                >
                  ＋
                </ChipButton>
                <ChipButton
                  colorKey="red"
                  mediaQueries="py-1 px-2"
                  onClick={() => onClickChangeMoney("minus", stake)}
                >
                  ー
                </ChipButton>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-3">
          <Button
            buttonType="blue"
            mediaQueries="py-2 px-5 md:py-4 md:px-8 text-2xl"
            onClick={() => onClickSubmit(totalStake)}
          >
            Submit your bet {totalStake > 0 ? `for $${totalStake}` : ""}!
          </Button>
        </div>
      </div>
    </div>
  );
};
