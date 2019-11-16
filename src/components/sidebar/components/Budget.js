import React from "react";

const Budget = () => {
  return (
    <div className="budget">
      <span>Budget:</span>
      <div className="monthly mb-2">
        <span className="budget-span">Monthly</span>
        <select>
          <option value="0">No min</option>
          <option value="100">£100</option>
          <option value="150">£150</option>
          <option value="200">£200</option>
          <option value="250">£250</option>
          <option value="300">£300</option>
          <option value="350">£350</option>
          <option value="400">£400</option>
          <option value="450">£450</option>
        </select>
        <select>
          <option value="0">No max</option>
          <option value="100">£100</option>
          <option value="150">£150</option>
          <option value="200">£200</option>
          <option value="250">£250</option>
          <option value="300">£300</option>
          <option value="350">£350</option>
          <option value="400">£400</option>
          <option value="450">£450</option>
        </select>
      </div>
      <div className="total">
        <span className="budget-span">Total upfront</span>
        <select>
          <option value="0">No min</option>
          <option value="100">£100</option>
          <option value="150">£150</option>
          <option value="200">£200</option>
          <option value="250">£250</option>
          <option value="300">£300</option>
          <option value="350">£350</option>
          <option value="400">£400</option>
          <option value="450">£450</option>
        </select>
        <select>
          <option value="0">No max</option>
          <option value="100">£100</option>
          <option value="150">£150</option>
          <option value="200">£200</option>
          <option value="250">£250</option>
          <option value="300">£300</option>
          <option value="350">£350</option>
          <option value="400">£400</option>
          <option value="450">£450</option>
        </select>
      </div>
    </div>
  );
};

export default Budget;
