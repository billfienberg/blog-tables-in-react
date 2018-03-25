import React from "react";
import "./App.css"

const App = () => (
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
      <tbody>
        <tr>
          <td rowSpan="7">Ohio</td>
          <td rowSpan="7">OH</td>
          <td>Cleveland</td>
          <td>~2.1M</td>
        </tr>
        <tr>
          <td>Columbus</td>
          <td>~2.0M</td>
        </tr>
        <tr>
          <td>Cincinnati</td>
          <td>~2.1</td>
        </tr>
        <tr>
          <td>Toledo</td>
          <td>~600k</td>
        </tr>
        <tr>
          <td>Dayton</td>
          <td>~800k</td>
        </tr>
        <tr>
          <td>Youngstown</td>
          <td>~600k</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td rowSpan="5">Texas</td>
          <td rowSpan="5">TX</td>
          <td>Austin</td>
          <td>~2.1M</td>
        </tr>
        <tr>
          <td>San Antonio</td>
          <td>~2.5M</td>
        </tr>
        <tr>
          <td>Houston</td>
          <td>~6.3M</td>
        </tr>
        <tr>
          <td>Dallas</td>
          <td>~7.2M</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td rowSpan="5">California</td>
          <td rowSpan="5">CA</td>
          <td>San Diego</td>
          <td>~3.3M</td>
        </tr>
        <tr>
          <td>Los Angeles</td>
          <td>~13.1M</td>
        </tr>
        <tr>
          <td>San Francisco</td>
          <td>~4.7M</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default App
