describe('main', () => {
  beforeEach(() => cy.visit('/iframe.html?id=maincomponent--primary'));
  it('should render the component', () => {
    cy.get('website2021-main').should('exist');
  });
});