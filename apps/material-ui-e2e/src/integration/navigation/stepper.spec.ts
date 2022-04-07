describe('Stepper', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-navigation-stepper--primary')
  );

  it('renders the stepper component', () => {
    cy.getBySel('mui-stepper').should('exist');
  });
});
