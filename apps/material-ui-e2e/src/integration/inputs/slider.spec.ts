describe('Slider', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-inputs-slider--primary')
  );

  it('renders the slider', () => {
    cy.getBySel('mui-slider').should('exist');
  });
});
