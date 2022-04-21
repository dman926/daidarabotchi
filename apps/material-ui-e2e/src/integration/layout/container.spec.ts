describe('Container', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-layout-container--primary')
  );

  it('renders the container', () => {
    cy.getBySel('mui-container').should('exist');
  });
});
