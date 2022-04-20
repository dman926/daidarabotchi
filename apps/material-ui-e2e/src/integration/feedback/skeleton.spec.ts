describe('Skeleton', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-feedback-skeleton--demo')
  );

  it('renders the skeleton component', () => {
    cy.getBySel('mui-skeleton').should('exist');
  });
});
