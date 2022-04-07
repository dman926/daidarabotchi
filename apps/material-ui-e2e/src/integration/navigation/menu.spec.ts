describe('Menu', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-navigation-menu--primary')
  );

  it('renders the menu component', () => {
    cy.getBySel('mui-button').should('exist').first().click();
    cy.getBySel('mui-menu').should('exist');
  });
});
