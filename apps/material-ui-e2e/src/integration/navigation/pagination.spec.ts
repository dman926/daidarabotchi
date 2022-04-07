describe('Pagination', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-navigation-pagination--primary')
  );

  it('renders the pagination', () => {
    cy.getBySel('mui-pagination').should('exist');
  });
});
