package org.example.Inheritance;

import org.example.CreditCardApplication;

// Inherited class for Premium Credit Card Application
public class PremiumCardApplication extends CreditCardApplication {
    public PremiumCardApplication(String applicantName, double annualIncome) {

        super(applicantName, annualIncome);
    }

    // Polymorphism :-Override methods for specific behavior
    @Override
    public void approveApplication() {
        if(getAnnualIncome() > 75000) {
            super.approveApplication(); // Calling base class method
        } else {
            System.out.println("Premium Card: Income too low for premium approval.");
        }
    }
}
