import React, { useState } from 'react';
import './App.css';

function App() {
  // States for BMI calculator
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [unit, setUnit] = useState('metric'); // 'metric' or 'imperial'

  // Functions to handle form inputs
  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const calculateBMI = (e) => {
    e.preventDefault();

    let calculatedBMI;

    if (unit === 'metric') {
      // Metric: weight (kg), height (cm)
      const heightInMeters = height / 100;
      calculatedBMI = weight / (heightInMeters * heightInMeters);
    } else {
      // Imperial: weight (lbs), height (inches)
      calculatedBMI = (weight / (height * height)) * 703;
    }

    setBmi(calculatedBMI.toFixed(2)); // Round to 2 decimal places
  };

  const resetForm = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setUnit('metric');
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      
      <div className="unit-toggle">
        <label>
          <input
            type="radio"
            value="metric"
            checked={unit === 'metric'}
            onChange={handleUnitChange}
          />
          Metric (kg, cm)
        </label>
        <label>
          <input
            type="radio"
            value="imperial"
            checked={unit === 'imperial'}
            onChange={handleUnitChange}
          />
          Imperial (lbs, inches)
        </label>
      </div>

      <form onSubmit={calculateBMI}>
        <div>
          <label htmlFor="weight">
            Weight ({unit === 'metric' ? 'kg' : 'lbs'}):
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={handleWeightChange}
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="height">
            Height ({unit === 'metric' ? 'cm' : 'inches'}):
            <input
              type="number"
              id="height"
              value={height}
              onChange={handleHeightChange}
              required
            />
          </label>
        </div>

        <button type="submit">Calculate BMI</button>
        <button type="button" onClick={resetForm}>Reset</button>
      </form>

      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <p>
            {bmi < 18.5
              ? 'Underweight'
              : bmi >= 18.5 && bmi < 24.9
              ? 'Normal weight'
              : bmi >= 25 && bmi < 29.9
              ? 'Overweight'
              : 'Obesity'}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
