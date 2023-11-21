class BookingPage {

    getOneWay(){
        return cy.get('.ml-0 > .mr-1')
    }
    getCabinClass() {
        return cy.get(':nth-child(2) > .label')
    }

    getFrom() {
        return cy.get(':nth-child(3) > .label')
    }

    getTo() {
        return cy.get(':nth-child(4) > .label')
    } 
    
    getDepart() {
       return cy.get('.field:nth-child(5) input')
    }
    
    getReturn() {
        return cy.get('.field:nth-child(6) input')
    }

    getTripType(){
        return cy.get('.radio > input')
    }

    getLabels() {
        return cy.get('.label')
    }

    getButton() {
        return cy.get('.Button_c_button__TmkRS')
    }
    getRoundTripButton() {
        return cy.get(':nth-child(2) > .mr-1').click()
    }
    
    getDepart1(){
        return cy.get('.is-underlined')
    }

    getRoute(){
        return cy.get('.is-italic')
    }
    getDate(){
        return cy.get('.is-italic').next()
    }
    paragraphs(){
        return cy.get('.mt-4 > p')
    }
    getPassanger2() {
        return cy.get('.label, :nth-child(9) > .label')
    }
    info(){
        this.getDepart1().should('be.visible').and('have.text', 'DEPART')
        this.getRoute().should('be.visible')
        this.getDate().should('be.visible')
        this.paragraphs().should('be.visible')
    }
    DepartAndReturn(){
        this.getDepart1().should('be.visible').and('have.text', 'DEPARTRETURN')
        this.getRoute().should('be.visible').and('have.text', 'CA to ILIL to CA')
        this.getDate().should('be.visible')
        this.paragraphs().should('be.visible')
    }
    
    }


export default BookingPage