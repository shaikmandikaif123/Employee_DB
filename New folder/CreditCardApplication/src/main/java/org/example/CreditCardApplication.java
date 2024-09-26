package org.example;

// Base class for Credit Card Application
public class CreditCardApplication {
    private String applicantName;
    private double annualIncome;

    // Constructor
    public CreditCardApplication(String applicantName, double annualIncome) {
        this.applicantName = applicantName;
        this.annualIncome = annualIncome;
    }

    // Encapsulation: Private fields with public getter/setter methods
    public String getApplicantName() {
        return applicantName;
    }

    public double getAnnualIncome() {
        return annualIncome;
    }

    public void setAnnualIncome(double annualIncome) {
        this.annualIncome = annualIncome;
    }

    // Abstraction: Approve or Reject methods can be overridden by child classes
    public void approveApplication() {
        System.out.println("Credit Card Application Approved for: " + applicantName);
    }

    public void rejectApplication() {
        System.out.println("Credit Card Application Rejected for: " + applicantName);
    }
}

