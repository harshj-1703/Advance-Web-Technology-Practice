import { MouseEvent } from "react";

interface Props {
  color: "primary" | "warning" | "success";
  children: string;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ color, children, handleClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
