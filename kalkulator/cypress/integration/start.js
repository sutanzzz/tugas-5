describe(' Kalkulator ', function() {
    it('successfully loads', function() {
      cy.visit('http://localhost:3001') // change URL to match your dev URL
    })

    it('greetings', () =>{
        cy.contains('h3', 'Aplikasi Kalkulator Redux')
    })

    it('Screen', () => {
        cy.contains('div', 0 )
    })

    it('click', () => {
        cy.get('button').contains('1').click()
        cy.get('1')
        .should('1')
    })
  })