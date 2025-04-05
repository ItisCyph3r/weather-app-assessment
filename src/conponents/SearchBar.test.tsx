import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('calls onSearch with the entered city', () => {
    const mockOnSearch = jest.fn();
    render(
      <MantineProvider>
        <SearchBar onSearch={mockOnSearch} className="" />
      </MantineProvider>
    );

    const input = screen.getByPlaceholderText('Enter city name');
    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.change(input, { target: { value: 'Berlin' } });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith('Berlin');
  });
});
