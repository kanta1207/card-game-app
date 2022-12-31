import { CardComponent } from "../atoms/CardComponent"


export const GamePage = () => {
  return (
    <div className="bg-[#1D4434] h-screen text-[#ffffff]">
      <div className="h-full flex items-center justify-center">
        <CardComponent suit="C" rank="A"/>
      </div>
    </div>
  )
}
