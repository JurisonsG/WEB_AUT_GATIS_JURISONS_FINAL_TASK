import { BasePage } from "./BasePage";

export class PracticeFormPage extends BasePage {
  static get url() {
    return "automation-practice-form";
  }

  static get firstName() {
    return cy.get('#firstName');
  }

  static get lastName() {
    return cy.get('#lastName');
  }

  static get email() {
    return cy.get('#userEmail');
  }

  static genderRadio(gender) {
    return cy.contains('.custom-control-label', gender).click();
  }

  static get mobileNumber() {
    return cy.get('#userNumber');
  }

  static get dateOfBirthInput() {
    return cy.get('#dateOfBirthInput');
  }

  static get monthSelect() {
    return cy.get('.react-datepicker__month-select');
  }

  static get yearSelect() {
    return cy.get('.react-datepicker__year-select');
  }

  static selectDay(day) {
    cy.get('.react-datepicker__day--0' + day)
      .not('.react-datepicker__day--outside-month')
      .first()
      .click();
  }

  static get subjectsInput() {
    return cy.get('#subjectsInput');
  }

  static selectHobby(hobby) {
    return cy.contains('.custom-control-label', hobby).click();
  }

  static get uploadPicture() {
    return cy.get('#uploadPicture');
  }

  static get currentAddress() {
    return cy.get('#currentAddress');
  }

  static selectState(state) {
    cy.get('#state').click();
    cy.contains('div', state).click();
  }

  static selectCity(city) {
    cy.get('#city').click();
    cy.contains('div', city).click();
  }

  static get submitButton() {
    return cy.get('#submit');
  }

  static get modal() {
    return cy.get('.modal-content');
  }
}
