describe('Link', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-navigation-link--primary')
  );

  it('renders the link component', () => {
    cy.getBySel('mui-link').should('exist');
  });
});
