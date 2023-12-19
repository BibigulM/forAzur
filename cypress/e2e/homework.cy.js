import { homeworkpage } from '../e2e/homework/homeworkpage'
import{result} from './homework_result/homework_result'

describe('homeworkJira', () => {

    before(()=>{
  cy.fixture('users').then((data)=>{
    globalThis.data = data
  })
    })
  
    beforeEach('',()=>{
     cy.login(data.username,data.password)
    });
  
  it  ('should save the user and search', () => {
  cy.contains(homeworkpage.adminPage)
  .click()
  cy.get(homeworkpage.elementConfig)
       .contains(homeworkpage.containsConfig)
       .click({force: true})
  
   cy.contains(homeworkpage.containsLanguagePack, 'Language Packages')
              .click()
  
  cy.get (homeworkpage.addLanguage)
  .click()
  
  cy.get (homeworkpage.selectLanguage)
  .click()
  
  cy.get (homeworkpage.elementLanguage)
  .contains(homeworkpage.containsLanguage)
  .click()

  cy.get(homeworkpage.saveButton)
  .click()

  cy.get(result.list)
  .contains(result.containsResult)
  .should('have.text', result.expected_result)
  
  
  });
  });