describe('Circular Progress', () => {
  it('renders the basic story', () => {
    cy.visit('/iframe.html?id=material-ui-feedback-circular-progress--basic')
    cy.getBySel('mui-circular-progress').should('exist');
  });

  it('renders the color story', () => {
    cy.visit('/iframe.html?id=material-ui-feedback-circular-progress--color')
    cy.getBySel('mui-circular-progress').should('exist');
  });

  it('renders the determinate story', () => {
    cy.visit('/iframe.html?id=material-ui-feedback-circular-progress--determinate')
    cy.getBySel('mui-circular-progress').should('exist');
  });

  it('renders the with label story', () => {
    cy.visit('/iframe.html?id=material-ui-feedback-circular-progress--with-label')
    cy.getBySel('mui-circular-progress').should('exist');
  });
});
