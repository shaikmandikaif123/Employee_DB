package org.example;

// Inherited class for Standard Credit Card Application
public class StandardCardApplication extends CreditCardApplication {
    public StandardCardApplication(String applicantName, double annualIncome) {
        super(applicantName, annualIncome);
    }

    // Polymorphism: Override methods for specific behavior
    @Override
    public void approveApplication() {
        if(getAnnualIncome() > 25000) {
            super.approveApplication(); // Calling base class method
        } else {
            System.out.println("Standard Card: Income too low for approval.");
        }
    }
}

