describe('Rating', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-inputs-rating--primary')
  );

  it('renders the rating component', () => {
    cy.getBySel('mui-rating').should('exist');
  });
});
