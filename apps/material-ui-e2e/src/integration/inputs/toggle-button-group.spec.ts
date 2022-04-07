describe('Toggle Button Group', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-inputs-togglebuttongroup--primary')
  );

  it('renders the toggle button group', () => {
    cy.getBySel('mui-toggle-btn-group').should('exist');
  });
});
