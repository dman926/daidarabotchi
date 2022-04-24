import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TabBox from './tab-box';

describe('ContactForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TabBox tabs={[]} />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('nek-tab-box')).toBeInTheDocument();
  });

  it('should only render the head when defined', () => {
    let { baseElement } = render(<TabBox tabs={[]} />);
    expect(baseElement).toBeTruthy();
    expect(screen.queryByTestId('nek-tab-box-head')).not.toBeInTheDocument();
    baseElement = render(<TabBox tabs={[]} head="HEAD TEST" />).baseElement;
    expect(baseElement).toBeTruthy();
    const head = screen.getByTestId('nek-tab-box-head');
    expect(head).toBeInTheDocument();
    expect(head).toHaveTextContent('HEAD TEST');
  });

  it('should render the correct number of tabs', () => {
    const { baseElement } = render(
      <TabBox
        tabs={[{ content: <></> }, { content: <></> }, { content: <></> }]}
      />
    );
    expect(baseElement).toBeTruthy();
    const tabs = screen.getAllByTestId('nek-tab-box-tab');
    tabs.forEach((tab) => {
      expect(tab).toBeInTheDocument();
    });
    expect(tabs).toHaveLength(3);
  });
});
