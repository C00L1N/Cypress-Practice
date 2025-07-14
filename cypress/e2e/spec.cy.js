describe('Registeration Credentials', () => {
    it('Filling the form', () => {
        // visit the page
        cy.visit('https://c00l1n.github.io/Cypress-Testing-Ground/')
        cy.wait(1000)

        const visible = 'be.visible';
        cy.genderGenerator().then((gender) => {
            let Gender = Number(gender);
            if (Gender === 0) {
                cy.maleFirstNameGenerator().then((firstName) => {
                    cy.wrap(firstName).as('firstName')
                    cy.get(':nth-child(1) > input')
                        .should(visible)
                        .type(firstName)
                })
                cy.get('[value="male"]')
                    .check({ force: true })
            } else {
                cy.femaleFirstNameGenerator().then((firstName) => {
                    cy.wrap(firstName).as('firstName')
                    cy.get(':nth-child(1) > input')
                        .should(visible)
                        .type(firstName)
                })
                cy.get('[value="female"]')
                    .check({ force: true })
            }
        })
        // last name
        cy.lastnameGenerator().then((lastName) => {
            cy.wrap(lastName).as('lastname')
            cy.get(':nth-child(3) > input')
                .should(visible)
                .type(lastName)
        })

        // middle name
        cy.middlenameGenerator().then((middleName) => {
            cy.get(':nth-child(2) > input')
                .should(visible)
                .type(middleName)
        })

        // email
        cy.emailaddressGenerator().then((email) => {
            cy.get('@firstName').then((firstName) => {
                cy.get('@lastname').then((lastName) => {
                    const emailAddress = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${email}`;
                    cy.get('#email')
                        .should(visible)
                        .type(emailAddress)
                })
            })
        })

        // password
        cy.generatePassword().then((password) => {
            cy.get('#password')
                .should(visible)
                .type(password)
        })

        // phone number
        cy.phoneNumberGenerator().then((phoneNumber) => {
            cy.get('#phoneNumber')
                .should(visible)
                .type(phoneNumber)
        })
    })
})