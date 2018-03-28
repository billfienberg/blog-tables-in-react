import React from "react";
import "./App.css";

const App = ({ states = {} }) => {
  const stateValues = Object.values(states);
  const tbodies = stateValues.map((state, index) => {
    const cityValues = Object.values(state.cities);
    const cityRows = cityValues.map((city, i) => {
      return (
        <tr key={i}>
          <td className="stateName">{state.name}</td>
          <td className="stateAbbreviation">{state.abbreviation}</td>
          <td>{city.name}</td>
          <td>{city.metroPopulation}</td>
        </tr>
      );
    });
    return (
      <tbody key={index} className={state.name}>
        {cityRows}
      </tbody>
    );
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="4">Metro Areas by State</th>
          </tr>
          <tr>
            <th>State Name</th>
            <th>State Abbreviation</th>
            <th>City</th>
            <th>Population</th>
          </tr>
        </thead>
        {tbodies}
      </table>
    </div>
  );
};

export default App;
