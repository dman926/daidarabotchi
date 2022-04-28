describe('new-england-keeshonds - header', () => {
  beforeEach(() => cy.visit('/puppies'));

  it('should have buttons that lead to `/` and `/puppies`', () => {
    cy.window().then((win) => {
      expect(win.location.href.substring(22)).to.be.equal('puppies');
    });
    cy.getBySel('nek-header-nav-button')
      .should('be.visible')
      .each((el, index) => {
        cy.wrap(el).click();

        cy.window().then((win) => {
          expect(win.location.href.substring(22)).to.be.equal(
            (() => {
              switch (index) {
                case 0:
                  return '';
                case 1:
                  return 'puppies';
                default:
                  return false;
              }
            })()
          );
        });
      });
  });

  it('should have a title that acts as a link to the home page', () => {
    cy.window().then((win) => {
      expect(win.location.href.substring(22)).to.be.equal('puppies');
    });
    cy.getBySel('nek-header-title').should('be.visible').click();
    cy.window().then((win) => {
      expect(win.location.href.substring(22)).to.be.equal('');
    });
  });
});
