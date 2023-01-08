import { FC, useState } from "react";
import { Button } from "../atoms/Button";

const stakes = [5, 20, 50, 100];

type Props = {
  onClickSubmit : (bet : number)=>void;
}

export const StakeHandler : FC<Props> = (props) => {
  const {onClickSubmit} = props;
  const [totalStake, setTotalStake] = useState(0);

  const onClickChangeMoney = (oparator: "plus" | "minus", stake: number) => {
    if(oparator === "plus")setTotalStake((totalStake) => totalStake + stake)
    else if(totalStake >= stake)setTotalStake((totalStake) => totalStake - stake);
  };

  return (
    <div>
      <div className="flex justify-center space-x-3">
        {stakes.map((stake) => (
          <div className="text-center" key={stake}>
            <p className="font-bold">{stake}</p>
            <div className="w-full flex">
              <Button
                buttonType="green"
                mediaQueries="py-1 px-2"
                onClick={() => onClickChangeMoney("plus",stake)}
              >
                ＋
              </Button>
              <Button
                buttonType="red"
                mediaQueries="py-1 px-2"
                onClick={() => onClickChangeMoney("minus",stake)}
              >
                ー
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-3">
        <Button
          buttonType="blue"
          mediaQueries="py-2 px-5"
          onClick={()=>onClickSubmit(totalStake)}
        >
          Submit your bet {totalStake > 0 ? `for ${totalStake} !` : ""}
        </Button>
      </div>
    </div>
  );
};
