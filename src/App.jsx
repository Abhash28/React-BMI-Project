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
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card p-4 shadow-lg"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4 text-primary">BMI Calculator</h2>

        <div className="mb-3">
          <label htmlFor="height" className="form-label">
            Height (cm)
          </label>
          <input
            type="text"
            className="form-control"
            id="height"
            ref={heightRef}
            placeholder="Enter your height in cm"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="weight" className="form-label">
            Weight (kg)
          </label>
          <input
            type="text"
            className="form-control"
            id="weight"
            ref={weightRef}
            placeholder="Enter your weight in kg"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          onClick={handleCalculate}
        >
          Calculate BMI
        </button>

        {bmi && (
          <div className="alert alert-info mt-4 text-center">
            <h4 className="mb-1">Your BMI: {bmi}</h4>
            <p className="mb-0">
              Category: <strong>{remark}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
