import { ComponentProps, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  buttonType: "green" | "red" | "yellow" | "white";
  mediaQueries: string;
  onClick : ()=>void;
};

const buttonTypeMap = new Map<string, string>([
  ["green", "bg-[#28A745] text-[#ffffff]"],
  ["red", "bg-[#DC3444] text-[#ffffff]"],
  ["yellow", "bg-[#F8BA03] text-[#000000]"],
  ["white", "bg-[#ffffff] text-[#000000]"],
]);

const baseStyle = "rounded-full flex items-center hover:opacity-80 hover:translate--y-1";

export const Button: FC<Props> = (props) => {
  const {children,buttonType,mediaQueries,onClick} = props;
  return (
    <button
      className={`${baseStyle} , ${buttonTypeMap.get(
        buttonType
      )} ${mediaQueries} `} onClick={()=>onClick()}
    >
      {children}
    </button>
  );
};
