describe('Drawer', () => {
  it('renders the drawer', () => {
    cy.visit('/iframe.html?id=material-ui-navigation-drawer--drawer');
    cy.getBySel('mui-button').should('exist').first().click();
    cy.getBySel('mui-drawer').should('exist');
  });

  it('renders the swipeable drawer', () => {
    cy.visit('/iframe.html?id=material-ui-navigation-drawer--swipeable-drawer');
    cy.getBySel('mui-button').should('exist').first().click();
    cy.getBySel('mui-swipeable-drawer-list').should('exist');
  });
});
