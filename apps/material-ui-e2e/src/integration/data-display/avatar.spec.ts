describe('Avatar', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-data-display-avatar--image')
  );

  it('renders the avatar component', () => {
    cy.getBySel('mui-avatar').should('exist');
  });
});
