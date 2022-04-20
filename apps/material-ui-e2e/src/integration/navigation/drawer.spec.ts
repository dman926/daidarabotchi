describe('Drawer', () => {
  it('renders the drawer', () => {
    cy.visit('/iframe.html?id=material-ui-navigation-drawer--primary');
    cy.getBySel('mui-button').should('exist').first().click();
    cy.getBySel('mui-drawer').should('exist');
  });

  it('renders the swipeable drawer', () => {
    cy.visit('/iframe.html?id=material-ui-navigation-drawer--swipeable');
    cy.getBySel('mui-button').should('exist').first().click();
    cy.getBySel('mui-swipeable-drawer').should('exist');
  });
});
