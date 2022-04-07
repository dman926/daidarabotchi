describe('Table', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-data-display-table--primary')
  );

  it('renders the table component', () => {
    cy.getBySel('mui-table').should('exist');
  });
});
