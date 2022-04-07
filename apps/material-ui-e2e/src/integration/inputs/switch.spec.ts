describe('Switch', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-inputs-switch--primary')
  );

  it('renders the switch button', () => {
    cy.getBySel('mui-switch').should('exist');
  });
});
