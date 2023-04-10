import { useState } from "react";
import "./App.css";

function App() {
  const [age, setAge] = useState(0);

  function calcAge(dob: string) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    setAge(age);
  }

  return (
    <div>
      <input
        type="date"
        name="mydata"
        onChange={(e) => {
          calcAge(e.target.value);
          console.log(e.target.value);
        }}
      />
      <h4>You are {age} years old</h4>
    </div>
  );
}

export default App;
