import { useState } from "react";
import { genTicket } from "./assets/helper";
import "./lottery.css";

function Lottery() {
  let [ticket, setTicket] = useState(genTicket(3));

  return (
    <div>
      <h2>Lotter Game</h2>
      <div className="ticket">
        {ticket[0]}
        {ticket[1]}
        {ticket[2]}
      </div>
    </div>
  );
}

export default Lottery;
