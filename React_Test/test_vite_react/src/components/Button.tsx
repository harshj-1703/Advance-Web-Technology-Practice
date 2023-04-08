interface Props {
  color: "primary" | "warning" | "success";
  text: string;
}

const Button = ({ color, text }: Props) => {
  return (
    <>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={() => console.log("button clicked")}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
