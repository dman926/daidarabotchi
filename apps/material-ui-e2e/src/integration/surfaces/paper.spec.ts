describe('Paper', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-surfaces-paper--primary')
  );

  it('renders the paper component', () => {
    cy.getBySel('mui-paper').should('exist');
  });
});
