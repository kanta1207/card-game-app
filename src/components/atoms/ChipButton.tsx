import { FC, ReactNode } from "react"

type Props = {
    children : ReactNode
    colorKey : "red" | "green" | "blue" | "yellow";
    mediaQueries: string;
    onClick : ()=>void;
}

const colorMap = new Map<string, string>([
  ["green", "bg-[#28A745] text-[#ffffff]"],
  ["red", "bg-[#DC3444] text-[#ffffff]"],
  ["yellow", "bg-[#F8BA03] text-[#ffffff]"],
  ["white", "bg-[#ffffff] text-[#000000]"],
  ["blue", "bg-[#017BFE] text-[#ffffff]"],
]);

export const ChipButton : FC<Props>= (props) => {
    const {children , colorKey,mediaQueries,onClick} = props
  return (
    <div className={`rounded-full py-2 px-2 hover:-translate-y-1 hover:duration-100 ${colorMap.get(colorKey)}`}>
      <button className={`rounded-full outline-dashed border-rounded outline-8 ${colorMap.get(colorKey)} ${mediaQueries}`} onClick={onClick}>{children}</button>
    </div>
  )
}
