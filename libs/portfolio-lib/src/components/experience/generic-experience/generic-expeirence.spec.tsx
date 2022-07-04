import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { GenericExperience } from './generic-experience';

describe('Generic Experience', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GenericExperience title="" content="" />);
    expect(baseElement).toBeTruthy();
    expect(
      screen.getByTestId('portfolio-generic-experience')
    ).toBeInTheDocument();
  });

  it('should render a card in compact mode', () => {
    const { baseElement } = render(
      <GenericExperience title="" content="" compact />
    );
    expect(baseElement).toBeTruthy();
    expect(
      screen.getByTestId('portfolio-generic-experience-compact')
    ).toBeInTheDocument();
  });

  it('should render a card header in compact mode', () => {
    const { baseElement } = render(
      <GenericExperience title="" content="" compact />
    );
    expect(baseElement).toBeTruthy();
    expect(
      screen.getByTestId('portfolio-generic-experience-compact')
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('portfolio-generic-experience-header')
    ).toBeInTheDocument();
  });

  it('should render card media in compact mode if supplied', () => {
    const { baseElement } = render(
      <GenericExperience title="" media={['abc.jpg']} content="" compact />
    );
    expect(baseElement).toBeTruthy();
    expect(
      screen.getByTestId('portfolio-generic-experience-compact')
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('portfolio-generic-experience-media')
    ).toBeInTheDocument();
  });

  it('should render card content in compact mode', () => {
    const { baseElement } = render(
      <GenericExperience title="" content="" compact />
    );
    expect(baseElement).toBeTruthy();
    expect(
      screen.getByTestId('portfolio-generic-experience-compact')
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('portfolio-generic-experience-content')
    ).toBeInTheDocument();
  });
});
