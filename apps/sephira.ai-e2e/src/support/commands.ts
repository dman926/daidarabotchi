// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    getBySel(selector: string, args?: string): Cypress.Chainable;
  }
}

// Command to utilize 'data-testid' more efficiently
Cypress.Commands.add('getBySel', (selector, args) => {
  const additionalSelectors = args || '';
  return cy.get(`[data-testid=${selector}] ${additionalSelectors}`);
});
