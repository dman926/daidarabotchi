describe('Box', () => {
  beforeEach(() => cy.visit('/iframe.html?id=material-ui-layout-box--primary'));

  it('renders the box', () => {
    cy.getBySel('mui-box').should('exist');
  });
});
