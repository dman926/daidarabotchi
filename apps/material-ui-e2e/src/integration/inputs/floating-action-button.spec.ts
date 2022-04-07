describe('Floating Action Button', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-inputs-floatingactionbutton--primary')
  );

  it('renders the floating action button', () => {
    cy.getBySel('mui-floating-button').should('exist');
  });
});
