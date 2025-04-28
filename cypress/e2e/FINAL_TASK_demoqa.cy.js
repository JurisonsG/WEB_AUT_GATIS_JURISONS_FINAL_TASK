import { PracticeFormPage } from "../PageObjects.js/PracticeFormPage";

describe('DemoQA Practice Form Automation', () => {
  it('should fill out and submit the form successfully', () => {
    // Visit the practice form page
    PracticeFormPage.open();

    // Fill personal information
    PracticeFormPage.firstName.type('John');
    PracticeFormPage.lastName.type('Doe');
    PracticeFormPage.email.type('john.doe@example.com');
    PracticeFormPage.genderRadio('Male');
    PracticeFormPage.mobileNumber.type('1234567890');

    // Set date of birth
    PracticeFormPage.dateOfBirthInput.click();
    PracticeFormPage.monthSelect.select('February');
    PracticeFormPage.yearSelect.select('1930');
    PracticeFormPage.selectDay('28');

    // Set subject
    PracticeFormPage.subjectsInput.type('Economics{enter}');

    // Select hobby
    PracticeFormPage.selectHobby('Music');

    // Upload a file from files/ directory
    PracticeFormPage.uploadPicture.attachFile({
      filePath: 'files/download.jpg',
      encoding: 'base64'
    });

    // Fill address
    PracticeFormPage.currentAddress.type('123 Main Street, City Center');

    // Set State and City
    PracticeFormPage.selectState('NCR');
    PracticeFormPage.selectCity('Delhi');

    // Submit the form
    PracticeFormPage.submitButton.click();

    // Validate submitted information
    PracticeFormPage.modal.should('contain.text', 'John Doe');
    PracticeFormPage.modal.should('contain.text', 'john.doe@example.com');
    PracticeFormPage.modal.should('contain.text', 'Male');
    PracticeFormPage.modal.should('contain.text', '1234567890');
    PracticeFormPage.modal.should('contain.text', '28 February,1930');
    PracticeFormPage.modal.should('contain.text', 'Economics');
    PracticeFormPage.modal.should('contain.text', 'Music');
    PracticeFormPage.modal.should('contain.text', 'download.jpg');
    PracticeFormPage.modal.should('contain.text', '123 Main Street, City Center');
    PracticeFormPage.modal.should('contain.text', 'NCR Delhi');
  });
});
