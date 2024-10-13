import { useRef, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [bmi, setBmi] = useState();
  const [remark, setRemark] = useState(""); // State to store the remark

  const heightRef = useRef();
  const weightRef = useRef();

  const handleCalculate = () => {
    const heightValue = heightRef.current.value;
    const weightValue = weightRef.current.value;

    if (heightValue && weightValue) {
      const bmiValue = (weightValue / (heightValue / 100) ** 2).toFixed(1);
      setBmi(bmiValue);

      // Determine the BMI category and set the remark
      if (bmiValue < 18.5) {
        setRemark("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setRemark("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setRemark("Overweight");
      } else {
        setRemark("Obese");
      }
    }
  };

  return (
    <center>
      <div>
        <h2>BMI Calculator</h2>
        <div className="mb-3">
          <label htmlFor="height" className="form-label">
            Height (cm)
          </label>
          <input
            type="text"
            className="form-control width"
            id="height"
            ref={heightRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="weight" className="form-label">
            Weight (kg)
          </label>
          <input
            type="text"
            className="form-control width"
            id="weight"
            ref={weightRef}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleCalculate}
        >
          Calculate
        </button>

        {/* Display the calculated BMI and the corresponding remark */}
        {bmi && (
          <div className="mt-3">
            <h3>Your BMI: {bmi}</h3>
            <h4>Category: {remark}</h4>
          </div>
        )}
      </div>
    </center>
  );
}

export default App;
