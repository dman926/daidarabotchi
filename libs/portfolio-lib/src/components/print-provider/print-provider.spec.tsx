import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ReactElement } from 'react';
import { PrintProvider, usePrint } from './print-provider';

const renderWithProvider = (ui: ReactElement, print?: boolean) =>
  render(<PrintProvider print={print}>{ui}</PrintProvider>);

function TestComp() {
  const { print, setPrint } = usePrint();

  return (
    <div>
      <p data-testid="print-output">{print ? 'true' : 'false'}</p>
      <button
        type="button"
        onClick={() => {
          setPrint((cur) => !cur);
        }}
        data-testid="set-print-button"
      >
        click to toggle
      </button>
    </div>
  );
}

describe('Print Provider', () => {
  beforeEach(() => {
    const { baseElement } = renderWithProvider(<TestComp />, false);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('print-provider')).toBeInTheDocument();
  });

  it('should generate a valid state object', () => {
    // dummy expect since beforeEach performs this test
    expect(true).toBeTruthy();
  });

  it('should start with defined intial print value', () => {
    const button = screen.getByTestId('set-print-button');
    expect(button).toBeInTheDocument();
    let state = false;
    for (let i = 0; i < 5; i += 1) {
      const text = screen.getByTestId('print-output');
      expect(text).toBeInTheDocument();
      expect(text).toHaveTextContent(state ? 'true' : 'false');
      fireEvent.click(button);
      state = !state;
    }
  });
});
