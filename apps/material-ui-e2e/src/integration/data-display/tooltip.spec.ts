describe('Tooltip', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-data-display-tooltip--primary')
  );

  it('renders the tooltip component', () => {
    cy.getBySel('mui-tooltip').should('exist');
  });
});
