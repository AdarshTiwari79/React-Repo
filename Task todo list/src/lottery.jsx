import { useState } from "react";
import { genTicket, sum } from "./assets/helper";
import "./lottery.css";

function Lottery() {
  let [ticket, setTicket] = useState(genTicket(3));

  let isWinning = sum(ticket) === 15;

  let genNewTicket = () => {
    setTicket(genTicket(3));
  };

  return (
    <div>
      <h2>Lotter Game</h2>
      <div className="ticket">
        {ticket.map((el, index) => {
          return <span key={index}>{el}</span>;
        })}
      </div>
      <br></br>
      <button onClick={genNewTicket}>Buy new ticket</button>
      {isWinning ? <h3>congratulations you won lottery</h3> : ""}
    </div>
  );
}

export default Lottery;
