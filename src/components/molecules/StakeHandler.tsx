import { Button } from "../atoms/Button";

const stakes = [5,20,50,100];

export const StakeHandler = () => {
  return (
    <div className="flex space-x-3">
      {stakes.map((stake)=>(
        <div className="text-center">
          <div>
            <p className="font-bold">{stake}</p>
          </div>
          <div className="w-full flex">
            <Button buttonType="green" mediaQueries="py-1 px-2" onClick={()=>alert()}>＋</Button>
            <Button buttonType="red" mediaQueries="py-1 px-2" onClick={()=>alert()}>ー</Button>
          </div>
        </div>
      ))}
    </div>
  )
}
