import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { PrintWrap } from './print-wrap';

const childText = 'TEST CHILD';
const renderPrintWrap = (
  { child, print }: { child: boolean; print: boolean } = {
    child: true,
    print: false,
  }
) =>
  render(
    <PrintWrap element="span" print={print}>
      {child && <span data-testid="print-wrap-child">{childText}</span>}
    </PrintWrap>
  );

describe('Print Wrap', () => {
  it('should render successfully', () => {
    const { baseElement } = renderPrintWrap();
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId('portfolio-print-wrap')).toBeInTheDocument();
    let el: HTMLElement | null = screen.getByTestId('print-wrap-child');
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent(childText);
    cleanup();
    const { baseElement: baseElement2 } = renderPrintWrap({
      child: true,
      print: true,
    });
    expect(baseElement2).toBeTruthy();
    expect(
      screen.queryByTestId('portfolio-print-wrap')
    ).not.toBeInTheDocument();
    el = screen.getByTestId('print-wrap-child');
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent(childText);
    cleanup();
    const { baseElement: baseElement3 } = renderPrintWrap({
      child: false,
      print: false,
    });
    expect(baseElement3).toBeTruthy();
    expect(screen.getByTestId('portfolio-print-wrap')).toBeInTheDocument();
    el = screen.queryByTestId('print-wrap-child');
    expect(el).not.toBeInTheDocument();
  });
});
