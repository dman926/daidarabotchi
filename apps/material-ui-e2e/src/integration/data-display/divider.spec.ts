describe('Divider', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-data-display-divider--horizontal')
  );

  it('renders the divider component', () => {
    cy.getBySel('mui-divider').should('exist');
  });
});
