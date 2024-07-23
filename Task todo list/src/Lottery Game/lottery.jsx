import { useState } from "react";
import { getNum, winCondition } from "./helper";
import Ticket from "./ticket";
import "./lottery.css";

export default function Lottery({ n, winningSum }) {
  let [ticket, setTicket] = useState(getNum(n));

  let isWinning = winCondition(ticket) === winningSum;

  let btnClick = () => {
    setTicket(getNum(n));
  };

  return (
    <div className="lottery">
      <h2>Lottery Game !!!</h2>
      <Ticket ticket={ticket} />
      <br></br>
      <button onClick={btnClick}>Buy New Ticket</button>
      <br></br>
      {isWinning ? <h3>Congratulations you won !!!</h3> : ""}
    </div>
  );
}
