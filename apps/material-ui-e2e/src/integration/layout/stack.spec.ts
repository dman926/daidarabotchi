describe('Stack', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-layout-stack--primary')
  );

  it('renders the stack', () => {
    cy.getBySel('mui-stack').should('exist');
  });
});
