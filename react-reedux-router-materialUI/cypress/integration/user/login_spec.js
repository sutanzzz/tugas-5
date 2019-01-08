describe('Log In', () => {
    beforeEach(() => {
        cy.visit('/login')
    })

    it('Sign In', () => {
        cy.contains('h1', 'Sign in')
    })
    
    it('link to Sign Up', () => {
        cy.contains('Sign Up Instead')
        .should('have.attr', 'href', '/signup')
    })

    it('requires email', () => {
        cy.get('form').contains('Sign in').click()
        cy.get('.error-messages')
        .should('contain','The email address is badly formatted')
    })

})