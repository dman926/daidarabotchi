describe('Select', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-inputs-select--primary')
  );

  it('renders the select component', () => {
    cy.getBySel('mui-select').should('exist');
  });
});
