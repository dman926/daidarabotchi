describe('Drawer', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-navigation-drawer--primary')
  );

  it('renders the drawer', () => {
    cy.getBySel('mui-button').should('exist').first().click();
    cy.getBySel('mui-drawer').should('exist');
  });
});
