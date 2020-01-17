import React from 'react';
import { render } from '@testing-library/react';

import App, { foulVal } from './App';
import Dashboard from './components/Dashboard';


test('renders learn react link', () => {
   render(<App />);
  
});


test('both balls and strikes are render', () => {
  const { getByText } = render(<App />);
 getByText(/balls/i)
 getByText(/strikes/i)
});

test('buttons label exists.', () => {
  const component = render(<Dashboard />);
  component.getByTestId(/ball-btn/i);
  component.getByText(/ball/i);
  component.getByText(/strike/i);
  component.getByText(/foul/i);
  component.getByText(/hit/i);
  
});


//test logic


test('test foul use case', () => {
  
  expect(foulVal(1)).toBe(2);
  expect(foulVal(2)).toBe(2);
  expect(foulVal(0)).toBe(1);

 
 

});



