describe('Tabs', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-navigation-tabs--primary')
  );

  it('renders the tabs', () => {
    cy.getBySel('mui-tabs').should('exist');
  });
});
