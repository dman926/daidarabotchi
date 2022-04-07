describe('Radio', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-inputs-radio--primary')
  );

  it('renders the radio button', () => {
    cy.getBySel('mui-radio').should('exist');
  });
});
