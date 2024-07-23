import TicketNum from "./ticketNum";
import "./ticket.css";

export default function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <p>Ticket</p>
      {ticket.map((num, indx) => {
        return <TicketNum num={num} key={indx} />;
      })}
    </div>
  );
}
