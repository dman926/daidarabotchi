describe('Dialog', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-feedback-dialog--basic')
  );

  it('renders the dialog', () => {
    cy.getBySel('mui-button').should('exist').first().click();
    cy.getBySel('mui-dialog').should('exist');
  });
});
