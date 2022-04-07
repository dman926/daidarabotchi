describe('Badge', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-data-display-badge--basic')
  );

  it('renders the badge component', () => {
    cy.getBySel('mui-badge').should('exist');
  });
});
