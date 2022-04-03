import { render } from '@testing-library/react';

import Accordion from './accordion';
import AccordionDetails from './accordion-details/accordion-details';
import { AccordionSummary } from './accordion-summary/accordion-summary';

describe('Accordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Accordion>
        <AccordionSummary>
          <span>Test Summary</span>
        </AccordionSummary>
      <AccordionDetails>Foo Bar</AccordionDetails>
    </Accordion>);
    expect(baseElement).toBeTruthy();
  });
});
