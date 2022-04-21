describe('App Bar', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-surfaces-app-bar--basic')
  );

  it('renders the app bar component', () => {
    cy.getBySel('mui-app-bar').should('exist');
  });
});
