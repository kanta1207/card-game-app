import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  buttonType: "green" | "red" | "yellow" | "white" | "blue";
  mediaQueries: string;
  onClick: (e?: any) => void;
};

const buttonTypeMap = new Map<string, string>([
  ["green", "hover:bg-[#28A745] hover:text-[#ffffff]"],
  ["red", "hover:bg-[#DC3444] hover:text-[#ffffff]"],
  ["yellow", "hover:bg-[#F8BA03]"],
  ["white", ""],
  ["blue", "hover:bg-[#017BFE] hover:text-[#ffffff]"],
]);

const baseStyle =
  "bg-[#ffffff] text-[#000000] rounded-full items-center hover:opacity-80 font-bold transition hover:duration-500";

export const Button: FC<Props> = (props) => {
  const { children, buttonType, mediaQueries, onClick } = props;
  return (
    <button
      className={`${baseStyle} , ${buttonTypeMap.get(
        buttonType
      )} ${mediaQueries} `}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
