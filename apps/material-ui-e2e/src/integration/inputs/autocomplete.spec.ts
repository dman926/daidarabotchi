describe('Autocomplete', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-inputs-autocomplete--primary')
  );

  it('renders the autocomplete field', () => {
    cy.getBySel('mui-autocomplete').should('exist');
  });
});
