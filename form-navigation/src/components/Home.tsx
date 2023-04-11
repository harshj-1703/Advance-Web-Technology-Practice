import React, { MouseEvent } from "react";
import Button from "./Button";

const Home = () => {
  const handleClick = () => {
    console.log("Button clicked from home ");
  };
  const handleClickWarning = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("Warning Button clicked from home ", e.target);
  };
  return (
    <div>
      Welcome to my website
      <Button handleClick={handleClick} color="primary">
        This is test button
      </Button>
      <Button handleClick={handleClickWarning} color="warning">
        This is warning button
      </Button>
    </div>
  );
};

export default Home;
