describe('Backdrop', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-feedback-backdrop--primary')
  );

  it('renders the backdrop', () => {
    cy.getBySel('mui-backdrop').should('exist');
  });
});
