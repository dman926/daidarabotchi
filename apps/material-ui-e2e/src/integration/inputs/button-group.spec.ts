describe('Button Group', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-inputs-button-group--horizontal')
  );

  it('renders the button group', () => {
    cy.getBySel('mui-button-group').should('exist');
  });
});
