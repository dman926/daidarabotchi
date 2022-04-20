describe('Grid', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-layout-grid--primary')
  );

  it('renders the grid', () => {
    cy.getBySel('mui-grid').should('exist');
  });
});
