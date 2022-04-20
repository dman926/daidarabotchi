describe('Image List', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=material-ui-layout-image-list--primary')
  );

  it('renders the image list', () => {
    cy.getBySel('mui-image-list').should('exist');
  });
});
