describe('Swipeable Drawer', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-navigation-swipeabledrawer--primary')
  );

  it('renders the swipeable drawer', () => {
    cy.getBySel('mui-button').should('exist').first().click();
    cy.getBySel('mui-swipeable-drawer').should('exist');
  });
});
