describe('Accordion', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-surfaces-accordion--basic')
  );

  it('renders the accordion component', () => {
    cy.getBySel('mui-accordion').should('exist');
  });
});
