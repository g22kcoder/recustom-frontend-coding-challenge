import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button', () => {
  test('renders the Button component with label', () => {
    render(<Button label="Click me" />);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  test('button click calls event handler', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button', { name: 'Click me' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('button displays the correct mode', () => {
    render(<Button label="Primary Button" mode="primary" />);
    expect(screen.getByRole('button')).toHaveClass('storybook-button--primary');
  });

  test('button displays the correct size', () => {
    render(<Button label="Small Button" size="sm" />);
    expect(screen.getByRole('button')).toHaveClass('storybook-button--sm');
  });

  test('button applies the user-defined background color', () => {
    render(<Button label="Custom Color" backgroundColor="cyan" />);
    expect(screen.getByRole('button')).toHaveStyle(`background-color: cyan`);
  });
});