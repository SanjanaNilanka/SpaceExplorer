import { render, screen } from '@testing-library/react';
import CuriosityModel from './components/mrp/CuriosityModel';

describe('CuriosityModel Component', () => {
  test('renders "Meet Curiosity" heading', () => {
    render(<CuriosityModel />);
    const headingElement = screen.getByText(/Meet Curiosity/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders iframe with correct src and title', () => {
    render(<CuriosityModel />);
    const iframeElement = screen.getByTitle(/Curiosity Rover 3D Model/i);
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute('src', 'https://solarsystem.nasa.gov/gltf_embed/2398/?height=450&amp;rotate=true&amp;cc=true&amp;fs=true&amp;target=&amp;orbit=');
  });

  test('iframe has correct styles', () => {
    render(<CuriosityModel />);
    const iframeElement = screen.getByTitle(/Curiosity Rover 3D Model/i);
    expect(iframeElement).toHaveStyle({
      width: '100%',
      height: '100%',
      borderRadius: '20px',
      padding: '0 20%',
      backgroundColor: '#ebebeb',
      border: '2px inset',
    });
  });
});
