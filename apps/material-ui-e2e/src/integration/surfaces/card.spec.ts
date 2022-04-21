describe('Card', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-surfaces-card--basic')
  );

  it('renders the card component', () => {
    cy.getBySel('mui-card').should('exist');
  });
});
