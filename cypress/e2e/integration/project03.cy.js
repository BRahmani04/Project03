import BookingPage from '../../Pages/BookingPage'

const bookingPage = new BookingPage()

describe('Project 03', () => {
        
    beforeEach(() => {
        cy.fixture('example').then(function(data) {
            this.cabinClass = data.cabinClass
            this.date = data.date
            this.citys = data.citys
        })
    })

    

    it('Test Case 01 - Validate the default Book your trip form', function () {
        cy.visit('https://techglobal-training.com/frontend/project-3')

        bookingPage.getTripType().each((el) => {
            cy.wrap(el).should('be.enabled').and('be.visible')
        
        if(el.text().includes('One way')) { 
            cy.wrap(el).should('be.checked')
        }
        else if(el.text().includes('return')) {
        cy.wrap(el).should('not.be.checked')
        }
        })
        bookingPage.getLabels().each((el) => {
            cy.wrap(el).should('be.visible')
        
            if(el.text().includes('Number of passengers') || (el.text().includes('Passanger'))) {
                cy.wrap(el).next().find('option').should('have.value', this.date[0])
            }
            bookingPage.getDepart().should('be.visible')
            bookingPage.getReturn().should('be.visible').and('have.attr', 'disabled')
            bookingPage.getButton().should('be.enabled').and('be.visible')
        })
    })
    
    it('Test Case 02 - Validate the Book your trip form when Round trip is selected', function() {
        cy.visit('https://techglobal-training.com/frontend/project-3')

        bookingPage.getRoundTripButton().should('be.checked').parent().parent().contains('One way').should('not.be.checked')

        bookingPage.getLabels().each((el) => {
            cy.wrap(el).should('be.visible')
        
            if(el.text().includes('Number of passengers') || (el.text().includes('Passanger'))) {
                cy.wrap(el).next().find('option').should('have.value', this.date[0])
            }
            bookingPage.getDepart().should('be.visible')
            bookingPage.getReturn().should('be.visible')
            bookingPage.getButton().should('be.enabled').and('be.visible')
    })

})
it('Test Case 3 - Validate the Contact Us information', () => {
    cy.visit('https://techglobal-training.com/frontend/project-3')
    const date = new Date()
    let currentDay= String(date.getDate() + 7).padStart(2, '0')
    let currentMonth = String(date.getMonth()+1).padStart(2,'0')
    let currentYear = date.getFullYear()
    let currentDate = (`${currentMonth}/${currentDay}/${currentYear}`)

    bookingPage.getOneWay().click()
    bookingPage.getLabels().each((el) => {
        if(el.text().includes('Cabin Class')){
            cy.wrap(el).next().children().select('Business')
        }
        if(el.text().includes('From')){
            cy.wrap(el).next().children().select('Illinois')
        }
        if(el.text().includes('To')) {
            cy.wrap(el).next().children().select('Florida')
        }
        
    })
    
    bookingPage.getDepart().clear().type(currentDate)
    bookingPage.getButton().click()
    bookingPage.info()
    
})
    it('Test Case 04 - Validate the booking for 1 passenger and round trip', () => {
        cy.visit('https://techglobal-training.com/frontend/project-3')
        const date = new Date()
        let currentDay= String(date.getDate() + 7).padStart(2, '0')
        let currentMonth = String(date.getMonth() + 1).padStart(2,'0')
        let currentYear = date.getFullYear()
        let currentDate = (`${currentMonth}/${currentDay}/${currentYear}`)
        let nextMonth = (`/${currentDay}/${currentYear}`)
    
        bookingPage.getRoundTripButton().click()
        bookingPage.getLabels().each((el) => {
            if(el.text().includes('Cabin Class')){
                cy.wrap(el).next().children().select('Premium Economy')
            }
            if(el.text().includes('From')){
                cy.wrap(el).next().children().select('California')
                }
                if(el.text().includes('To')) {
                    cy.wrap(el).next().children().select('Illinois')
                }
    })
    bookingPage.getDepart().clear().type(currentDate)
    bookingPage.getReturn().clear().type(`${date.getMonth() + 2}/${nextMonth}`)
    bookingPage.getButton().click()
    bookingPage.DepartAndReturn()

})
 it('Test Case 05 - Validate the booking for 2 passengers and one way', () => {
    cy.visit('https://techglobal-training.com/frontend/project-3')
    const date = new Date()
    let currentDay= String(date.getDate() + 1).padStart(2, '0')
    let currentMonth = String(date.getMonth() + 1).padStart(2,'0')
    let currentYear = date.getFullYear()
    let currentDate = (`${currentMonth}/${currentDay}/${currentYear}`)

    bookingPage.getOneWay().click()
    bookingPage.getPassanger2().each((el) => {
        if(el.text().includes('Cabin Class')){
            cy.wrap(el).next().children().select('Premium Economy')
        }
        if(el.text().includes('From')){
            cy.wrap(el).next().children().select('New York')
        }
        if(el.text().includes('To')) {
            cy.wrap(el).next().children().select('Texas')
        }
        if(el.text().includes('Number of passengers')){
            cy.wrap(el).next().children().select('2')
        }
        if(el.text().includes('1')){
            cy.wrap(el).next().children().select('Adult (16-64)')
        }
        
    })
    cy.get(':nth-child(9) > .label').next().children().select('Child (2-11)')
    bookingPage.getDepart().clear().type(currentDate)
    bookingPage.getButton().click()
    bookingPage.info()
 })
})

