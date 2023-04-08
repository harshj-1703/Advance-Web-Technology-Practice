// import './App.css'
import Button from "./components/Button";
import List from "./components/List";

function App() {
  let list = ["Rajkot", "Surat", "Jamanagar", "vadodara", "ahamdabad"];
  return (
    <>
      <Button color="primary" text="MyButton" />
      <List cityList={list} title="City List" />
    </>
  );
}

export default App;
