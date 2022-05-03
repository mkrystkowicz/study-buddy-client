describe('Notes view', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.findByText(/login/i).should('exist');
    cy.findByText(/login/i).click().type('teacher@studybuddy.com');
    cy.findByText(/password/i).should('exist');
    cy.findByText(/password/i)
      .click()
      .type('1234');
    cy.findByText(/sign in/i).click();
  });

  it('allows to create a new note and delete it', () => {
    cy.visit('notes');
    cy.findByText(/title/i).click().type('New note');
    cy.findByText(/content/i)
      .click()
      .type('New content');
    cy.findByText(/add/i).click();
    cy.findAllByText(/new content/i).should('exist');
    cy.findAllByText('New note')
      .first()
      .parent()
      .findAllByLabelText(/delete/i)
      .click();
    cy.findAllByText('New note').should('not.exist');
  });
});
