import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { createMockServer } from './createMockServer'; 
import { afterEach, beforeEach } from 'node:test';
import userEvent from '@testing-library/user-event';


describe('Weather application tests', () => {
  let server;
  beforeEach(() => {
    server = createMockServer()
  })
  afterEach(() => {
    server.shutdown()
  })
})

describe('renders weather application title', () => {
    it('render weather application title', () => {  
      render(<App />);
      const linkElement = screen.getByText(/Weather Application/i);
      expect(linkElement).toBeInTheDocument();
  });
})

if('shows city search results', async () => {
  render(<App />);

  const input = screen.getByTestId('search-input')
  userEvent.type(input, 'Melbourne')

  const button = screen.getByTestId('search-button')
  userEvent.click(button)

  await waitFor(() => expect(screen.getAllByAltText(/Melbourne/i).length).toEqual(5))
});
