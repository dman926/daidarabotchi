describe('Chip', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-data-display-chip--avatar-chip')
  );

  it('renders the chip component', () => {
    cy.getBySel('mui-chip').should('exist');
  });
});
