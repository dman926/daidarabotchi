describe('Button Group', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-inputs-buttongroup--horizontal-group')
  );

  it('renders the button group', () => {
    cy.getBySel('mui-button-group').should('exist');
  });
});
