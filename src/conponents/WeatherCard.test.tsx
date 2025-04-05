import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import WeatherCard from './WeatherCard';

describe('WeatherCard', () => {
  it('renders weather data correctly', () => {
    const mockData = {
      name: 'Tokyo',
      main: { temp: '30', feels_like: '32' },
      weather: [{ icon: '01d', description: 'Clear sky' }],
      dt: 1690000000,
      sys: { country: 'JP' },
    };

    render(
      <MantineProvider>
        <WeatherCard data={mockData} />
      </MantineProvider>
    );

    // Use a custom matcher to handle text split across elements
    expect(screen.getByText((_, element) => {
      if (!element) return false; // Ensure element is not null
      const hasText = (node: Element) => node.textContent === 'Tokyo, JP';
      const nodeHasText = hasText(element);
      const childrenDontHaveText = Array.from(element.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    })).toBeInTheDocument();

    expect(screen.getByText('30°C')).toBeInTheDocument();
    expect(screen.getByText('Clear sky')).toBeInTheDocument();
  });
});
