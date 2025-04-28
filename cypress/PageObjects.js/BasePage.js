export class BasePage {
    static get url() {
      return '';
    }
  
    static open() {
      cy.visit(this.url);
    }
  }
  