import React from 'react';
import { render, screen } from '@testing-library/react';
import CuriosityRoverBanner from './components/mrp/CuriosityRoverBanner';

describe('CuriosityRoverBanner Component', () => {
  test('renders banner correctly', () => {
    render(<CuriosityRoverBanner />);

    // Check if the banner text is rendered correctly
    expect(screen.getByText('Mars')).toBeInTheDocument();
    expect(screen.getByText('Curiosity')).toBeInTheDocument();
    expect(screen.getByText('Rover')).toBeInTheDocument();
    expect(screen.getByText('Project')).toBeInTheDocument();

    // Check if the description text is rendered correctly
    expect(screen.getByText(/Part of NASA's Mars Science Laboratory mission/i)).toBeInTheDocument();

    // Check if the link is rendered correctly
    const exploreLink = screen.getByText('Explore the Project');
    expect(exploreLink).toBeInTheDocument();
    expect(exploreLink).toHaveAttribute('href', '/mrp-home');
  });
});
