/// < reference types="cypress" / >
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("visit Facbook", () => {
  cy.visit("www.fb.com");
});

Then("validate title", () => {
  cy.log(cy.title());
});
