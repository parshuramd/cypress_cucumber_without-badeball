import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { Locators } from "../../support/locators";
Given("I open euro page", () => {
  cy.visit("/");
  cy.get(Locators.AcceptAllCookies).click();
  cy.get('[name="from"]').click();
  cy.contains("London St Pancras Int'l").click();
  cy.get('[name="to"]').click();
  cy.contains("Paris Gare du Nord").click();
  
  cy.get('[name="calendar"]').click();
  cy.get('[datetime="2023-08-18"]').click();
  cy.get('[datetime="2023-08-20"]').click();
  cy.get('button').contains("OK").click();
  cy.get('[name="passenger-type"]').click();
  cy.get("button > .addAdult").click();
  cy.get('button').contains("OK").click();
  cy.get(".SearchButton").click();
  // cy.wait(5000);

  cy.get('[data-testid="journey-price-amount"]',{timeout:20000}).first().click();
  cy.get('div[id*="STD"] button').click();
  cy.get('[data-testid="journey-price-amount"]').eq(3).click();
  cy.get('div[id*="STD"] button').last().click();
  cy.get('[name="continueButton"]').click();
  // cy.wait(5000);
  cy.get('[name="continueButton"]').contains('Continue without extras').click();
  // cy.wait(5000);
  cy.get('[data-testid="continue-as-guest"]').click();
  cy.screenshot();
  
});