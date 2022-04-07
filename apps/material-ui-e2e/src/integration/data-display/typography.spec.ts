describe('Typography', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-data-display-typography--all')
  );

  it('renders the typography component', () => {
    cy.getBySel('mui-typography').should('exist');
  });
});
