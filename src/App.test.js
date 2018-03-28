import React from "react";
import ReactDOM from "react-dom";
import { mount, shallow } from "enzyme";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it(`renders one <tbody> when there is one state`, () => {
  const states = {
    OH: {
      name: "Ohio",
      abbreviation: "OH",
      cities: {}
    }
  };

  const wrapper = shallow(<App states={states} />);
  expect(wrapper.find("tbody").length).toEqual(1);
});

it(`renders three <tbody>s when there are three states`, () => {
  const states = {
    OH: {
      name: "Ohio",
      abbreviation: "OH",
      cities: {}
    },
    TX: {
      name: "Texas",
      abbreviation: "TX",
      cities: {}
    },
    CA: {
      name: "California",
      abbreviation: "CA",
      cities: {}
    }
  };

  const wrapper = shallow(<App states={states} />);
  expect(wrapper.find("tbody").length).toEqual(3);
});

it(`renders one <tr> when the state only has data for one city`, () => {
  const states = {
    OH: {
      name: "Ohio",
      abbreviation: "OH",
      cities: {
        Cleveland: {
          name: "Cleveland",
          metroPopulation: "~2.1M"
        }
      }
    }
  };

  const wrapper = shallow(<App states={states} />);
  expect(wrapper.find(".Ohio").find("tr").length).toEqual(1);
});

it(`renders two <tr> when the state only has data for two cities`, () => {
  const states = {
    OH: {
      name: "Ohio",
      abbreviation: "OH",
      cities: {
        Cleveland: {
          name: "Cleveland",
          metroPopulation: "~2.1M"
        },
        Columbus: {
          name: "Columbus",
          metroPopulation: "~2.0M"
        }
      }
    }
  };

  const wrapper = shallow(<App states={states} />);
  expect(wrapper.find(".Ohio").find("tr").length).toEqual(2);
});

it(`renders Ohio once when there is only data for one city in Ohio`, () => {
  const states = {
    OH: {
      name: "Ohio",
      abbreviation: "OH",
      cities: {
        Cleveland: {
          name: "Cleveland",
          metroPopulation: "~2.1M"
        }
      }
    }
  };

  const wrapper = shallow(<App states={states} />);
  expect(wrapper.find(".stateName").length).toEqual(1);
});

it(`renders Ohio only once when there is data for two or more cities in Ohio`, () => {
  const states = {
    OH: {
      name: "Ohio",
      abbreviation: "OH",
      cities: {
        Cleveland: {
          name: "Cleveland",
          metroPopulation: "~2.1M"
        },
        Columbus: {
          name: "Columbus",
          metroPopulation: "~2.0M"
        }
      }
    }
  };

  const wrapper = shallow(<App states={states} />);
  expect(wrapper.find(".stateName").length).toEqual(1);
});
