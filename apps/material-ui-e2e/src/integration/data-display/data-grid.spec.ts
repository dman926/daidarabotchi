describe('Data Grid', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-data-display-data-grid--primary')
  );

  it('renders the data grid component', () => {
    cy.getBySel('mui-data-grid').should('exist');
  });
});
