describe('Checkbox', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-inputs-checkbox--primary')
  );

  it('renders the checkbox', () => {
    cy.getBySel('mui-checkbox').should('exist');
  });
});
