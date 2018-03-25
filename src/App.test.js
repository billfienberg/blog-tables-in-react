import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it(`renders one <tbody> when there is one state`, () => {
  const states = {
    OH: {
      name: 'Ohio',
      abbreviation: 'OH',
      cities: {},
    },
  };

  const wrapper = shallow(<App states={states} />);
  expect(wrapper.find('tbody').length).toEqual(1);
});

it(`renders three <tbody>s when there are three states`, () => {
  const states = {
    OH: {
      name: 'Ohio',
      abbreviation: 'OH',
      cities: {},
    },
    TX: {
      name: 'Texas',
      abbreviation: 'TX',
      cities: {},
    },
    CA: {
      name: 'California',
      abbreviation: 'CA',
      cities: {},
    },
  };

  const wrapper = shallow(<App states={states} />);
  expect(wrapper.find('tbody').length).toEqual(3);
});
