describe('FormUser Component E2E Test', () => {
    beforeEach(() => {
        cy.visit('/formUser')
    })

    it('should fill out the form and submit it successfully', () => {
        cy.get('input[placeholder="Nombre"]').type('John Doe')
        cy.get('input[placeholder="Email"]').type('john.doe@example.com')
        cy.get('input[placeholder="Usuario"]').type('johndoe')
        cy.get('input[placeholder="Contraseña"]').type('password')

        cy.get('button[type="submit"]').contains('Agregar usuario').click()

        cy.visit('/clientes')

        
        cy.get('table').within(() => {
            cy.contains('td', 'John Doe').should('be.visible')
            cy.contains('td', 'john.doe@example.com').should('be.visible')
            cy.contains('td', 'johndoe').should('be.visible')

    })})
})