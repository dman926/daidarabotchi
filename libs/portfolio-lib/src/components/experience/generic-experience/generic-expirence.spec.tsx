import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { GenericExperience } from './generic-experience';

const short = {
  header: {
    headerProps: {},
    testid: 'short-header',
  },
  media: {
    mediaProps: {
      children: <span data-testid="short-media-inner">test media</span>,
    },
    testid: 'short-media',
  },
  content: {
    contentBody: <span data-testid="short-content-inner">test body</span>,
    testid: 'short-content',
  },
};

describe('Generic Experience', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GenericExperience />);
    expect(baseElement).toBeTruthy();
    expect(
      screen.getByTestId('portfolio-generic-experience')
    ).toBeInTheDocument();
  });

  it('should render a card in short mode', () => {
    const { baseElement } = render(<GenericExperience short={short} />);
    expect(baseElement).toBeTruthy();
    expect(
      screen.getByTestId('portfolio-generic-experience-short')
    ).toBeInTheDocument();
  });

  it('should render a card header in short mode', () => {
    const { baseElement } = render(<GenericExperience short={short} />);
    expect(baseElement).toBeTruthy();
    expect(
      screen.getByTestId('portfolio-generic-experience-short')
    ).toBeInTheDocument();
    expect(screen.getByTestId('short-header')).toBeInTheDocument();
  });

  it('should render card media in short mode if supplied', () => {
    const { baseElement } = render(<GenericExperience short={short} />);
    expect(baseElement).toBeTruthy();
    expect(
      screen.getByTestId('portfolio-generic-experience-short')
    ).toBeInTheDocument();
    if (short.media) {
      expect(screen.getByTestId('short-media')).toBeInTheDocument();
    }
  });

  it('should render card content in short mode if supplied', () => {
    const { baseElement } = render(<GenericExperience short={short} />);
    expect(baseElement).toBeTruthy();
    expect(
      screen.getByTestId('portfolio-generic-experience-short')
    ).toBeInTheDocument();
    if (short.content) {
      expect(screen.getByTestId('short-content')).toBeInTheDocument();
    }
  });
});
