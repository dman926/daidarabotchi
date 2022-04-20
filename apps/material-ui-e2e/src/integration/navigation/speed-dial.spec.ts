describe('Speed Dial', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-navigation-speed-dial--primary')
  );

  it('renders the speed dial', () => {
    cy.getBySel('mui-speed-dial').should('exist');
  });
});
