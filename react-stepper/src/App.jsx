import "./App.css";
import Stepper from "./Components/Stepper";

function App() {
  const steps = [
    {
      label: "Personal Info",
      content: <div>Personal info content</div>,
    },
    {
      label: "Account Info",
      content: <div>Account info content</div>,
    },
    {
      label: "Payment",
      content: <div>Payment contant</div>,
    },
    {
      label: "Confirmation",
      content: <div>Confirmation content</div>,
    },
    {
      label: "Review",
      content: <div>Review</div>,
    },
  ];

  return (
    <>
      <Stepper steps={steps} />
    </>
  );
}

export default App;
