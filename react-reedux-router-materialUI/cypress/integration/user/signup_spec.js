describe('Sign up', () => {
    beforeEach(() => {
        cy.visit('/signup')
    })

    it('Sign up', () => {
        cy.contains('h1', 'Sign Up')
    })
    
    it('link to Sign In', () => {
        cy.contains('Sign In Instead')
        .should('have.attr', 'href', '/login')
    })

    it('requires email', () => {
        cy.get('form').contains('sign up').click()
        cy.get('.error-messages')
        .should('contain','The email address is badly formatted')
    })

})