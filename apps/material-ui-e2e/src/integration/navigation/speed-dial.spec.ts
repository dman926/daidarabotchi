describe('Speed Dial', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-navigation-speeddial--primary')
  );

  it('renders the speed dial', () => {
    cy.getBySel('mui-speed-dial').should('exist');
  });
});
