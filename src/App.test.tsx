import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './state';

describe('App', () => {
  test('renders without crashing', () => {
    render(
      <Provider store={store}>
      <App />
    </Provider>
      );
    const linkElement = screen.getByText(/0/i);
    expect(linkElement).toBeInTheDocument();
  });
})

