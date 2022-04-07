describe('Bottom Navigation', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-navigation-bottomnavigation--primary')
  );

  it('renders the bottom navigation', () => {
    cy.getBySel('mui-bottom-navigation').should('exist');
  });
});
