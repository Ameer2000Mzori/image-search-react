import react from 'react'
import { mount } from '@cypress/react'
import 'tailwindcss/tailwind.css'
import App from '../../src/App'
describe('App Component', async () => {
  it('Successfully loads the App', () => {
    mount(<App />) // Mount the App component
    cy.contains('1').click().wait(1000)
    cy.get('[data-cy="input-val"]').click().wait(1000)
    cy.get('[data-cy="input-val"]').type('car').wait(1000)
    cy.get('[data-cy="submit-btn"]').click().wait(1000)
    cy.contains('1').click().wait(1000)
    cy.contains('2').click().wait(1000)
    cy.contains('3').click().wait(1000)
    cy.contains('4').click().wait(1000)
    cy.contains('5').click().wait(1000)
    cy.contains('1').click().wait(1000)
    cy.get('[data-cy="input-val"]').clear().wait(1000)
  })
})
