describe('Radio Group', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-inputs-radio-group--primary')
  );

  it('renders the radio group', () => {
    cy.getBySel('mui-radio-group').should('exist');
  });
});
