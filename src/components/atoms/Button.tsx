import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  buttonType: "green" | "red" | "yellow" | "black" | "blue";
  mediaQueries: string;
  onClick: (e?: any) => void;
};

const buttonTypeMap = new Map<string, string>([
  ["green", "hover:bg-[#28A745] hover:text-[#ffffff]"],
  ["red", "hover:bg-[#DC3444] hover:text-[#ffffff]"],
  ["yellow", "hover:bg-[#F8BA03]"],
  ["black", "hover:bg-[#000000] hover:text-[#ffffff]"],
  ["blue", "hover:bg-[#017BFE] hover:text-[#ffffff]"],
]);

const baseStyle =
  "bg-[#ffffff] text-[#000000] rounded-full items-center font-bold transition hover:duration-500";

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
