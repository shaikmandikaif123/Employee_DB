package org.example;

// Admin-specific status management (Polymorphism via Inheritance)
public class AdminStatusManager extends ApplicationStatusManager {
    @Override
    public void approveApplication() {
        System.out.println("Admin has approved the application.");
    }

    @Override
    public void rejectApplication() {
        System.out.println("Admin has rejected the application.");
    }
}
