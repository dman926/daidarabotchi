describe('Button', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-inputs-button--contained')
  );

  it('renders the contained button', () => {
    cy.getBySel('mui-button').should('exist');
  });
});
