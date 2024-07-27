import { useState } from "react";
import "./Stepper.css";

const Stepper = ({ steps }) => {
  const [currStep, setCurrStep] = useState(0);

  const handleContinue = () => {
    if (currStep < steps.length - 1) {
      setCurrStep((currStep) => currStep + 1);
    }
  };

  const handleBack = () => {
    if (currStep > 0) {
      setCurrStep((currStep) => currStep - 1);
    }
  };

  return (
    <div className="stepper">
      <div>
        {steps.map(({ label, content }, index) => {
          return (
            <div key={label} className="stepper-container">
              <div
                className={`step-number ${index <= currStep ? "active" : ""}`}
              >
                {index + 1}
                {index < steps.length - 1 && (
                  <div
                    className={`step-line ${index < currStep ? "active" : ""}`}
                  ></div>
                )}
              </div>
              <div className="step-label">{label}</div>
            </div>
          );
        })}
      </div>
      <div className="stepper-content">{steps[currStep].content}</div>
      <div className="stepper-controllers">
        <button onClick={handleContinue}>continue</button>
        <button onClick={handleBack}>back</button>
      </div>
    </div>
  );
};
export default Stepper;
