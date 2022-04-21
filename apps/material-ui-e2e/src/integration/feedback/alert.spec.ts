describe('Alert', () => {
  it('renders the severities story', () => {
    cy.visit('/iframe.html?id=material-ui-feedback-alert--alert-severities')
    cy.getBySel('mui-alert').should('exist');
  });
  
  it('renders the filled story', () => {
    cy.visit('/iframe.html?id=material-ui-feedback-alert--filled')
    cy.getBySel('mui-alert').should('exist');
  });
  
  it('renders the no icon story', () => {
    cy.visit('/iframe.html?id=material-ui-feedback-alert--no-icon')
    cy.getBySel('mui-alert').should('exist');
  });
  
  it('renders the standard story', () => {
    cy.visit('/iframe.html?id=material-ui-feedback-alert--standard')
    cy.getBySel('mui-alert').should('exist');
  });

  it('renders the text button story', () => {
    cy.visit('/iframe.html?id=material-ui-feedback-alert--text-button')
    cy.getBySel('mui-alert').should('exist');
  });
});
