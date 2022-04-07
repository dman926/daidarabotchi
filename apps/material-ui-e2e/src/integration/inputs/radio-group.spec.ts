describe('Radio Group', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-inputs-radiogroup--primary')
  );

  it('renders the radio group', () => {
    cy.getBySel('mui-radio-group').should('exist');
  });
});
