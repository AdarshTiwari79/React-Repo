import { useState } from "react";
import { getNum } from "./helper";
import Ticket from "./ticket";
import "./lottery.css";
import Button from "./button";

export default function Lottery({ n, winningCondition }) {
  let [ticket, setTicket] = useState(getNum(n));

  let isWinning = winningCondition(ticket);

  let btnClick = () => {
    setTicket(getNum(n));
  };

  return (
    <div className="lottery">
      <h2>Lottery Game !!!</h2>
      <Ticket ticket={ticket} />
      <br></br>
      <Button action={btnClick} />
      <br></br>
      {isWinning ? <h3>Congratulations you won !!!</h3> : ""}
    </div>
  );
}
