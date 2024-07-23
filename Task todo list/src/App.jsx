import "./App.css";
import Lottery from "./Lottery Game/lottery";

function App() {
  let winCondition = (arr) => {
    return arr.every((el) => {
      return el === arr[0];
    });
  };
  return (
    <>
      <Lottery n={2} winningCondition={winCondition} />
    </>
  );
}

export default App;
