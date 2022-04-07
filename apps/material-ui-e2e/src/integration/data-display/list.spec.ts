describe('List', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-data-display-list--avatar-and-icons')
  );

  it('renders the list component', () => {
    cy.getBySel('mui-list').should('exist');
  });
});
