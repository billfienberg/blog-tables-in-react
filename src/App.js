import React from 'react';
import './App.css';

const App = ({ states = {} }) => {
  const tbodies = Object.values(states).map(state => <tbody>{state.name}</tbody>)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="4">Metro Areas by State</th>
          </tr>
          <tr>
            <th colSpan="2">State Info</th>
            <th colSpan="2">City Info</th>
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
