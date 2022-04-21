describe('Text Field', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-inputs-text-field--primary')
  );

  it('renders the text field', () => {
    cy.getBySel('mui-text-field').should('exist');
  });
});
