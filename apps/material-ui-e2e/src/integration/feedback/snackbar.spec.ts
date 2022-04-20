describe('Snackbar', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-feedback-snackbar--simple')
  );

  it('renders the snackbar', () => {
    cy.getBySel('mui-button').should('exist').first().click();
    cy.getBySel('mui-snackbar').should('exist');
  });
});
