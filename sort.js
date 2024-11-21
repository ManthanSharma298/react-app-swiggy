import React, { useState } from 'react';
import './App.css';

function App() {
  // Sample data with names and ages
  const data = [
    { name: 'John Doe', age: 28 },
    { name: 'Jane Smith', age: 34 },
    { name: 'Sam Brown', age: 22 },
    { name: 'Alice Johnson', age: 40 },
    { name: 'Bob White', age: 25 },
  ];

  const [selectedOption, setSelectedOption] = useState('name'); // Default sorting by 'name'
  const [sortedData, setSortedData] = useState(data);

  // Sort function to sort data based on selected option
  const sortData = (option) => {
    let sortedArray;
    if (option === 'name') {
      sortedArray = [...data].sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === 'age') {
      sortedArray = [...data].sort((a, b) => a.age - b.age);
    }
    setSortedData(sortedArray);
  };

  // Handle radio button change
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    sortData(event.target.value);
  };

  return (
    <div className="App">
      <h1>Sortable Table</h1>

      {/* Radio buttons for Name and Age */}
      <div>
        <label>
          <input
            type="radio"
            name="sort"
            value="name"
            checked={selectedOption === 'name'}
            onChange={handleRadioChange}
          />
          Sort by Name
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="age"
            checked={selectedOption === 'age'}
            onChange={handleRadioChange}
          />
          Sort by Age
        </label>
      </div>

      {/* Table displaying sorted data */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
