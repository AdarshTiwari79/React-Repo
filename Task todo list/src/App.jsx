import "./App.css";
import Lottery from "./Lottery Game/lottery";

function App() {
  return (
    <>
      <Lottery n={4} winningSum={20} />
    </>
  );
}

export default App;
