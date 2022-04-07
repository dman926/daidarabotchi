describe('Breadcrumbs', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-navigation-breadcrumbs--primary')
  );

  it('renders the breadcrumbs', () => {
    cy.getBySel('mui-breadcrumbs').should('exist');
  });
});
