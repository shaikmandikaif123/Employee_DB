package org.example;

// User-specific status management
public class UserStatusManager extends ApplicationStatusManager {
    @Override
    public void approveApplication() {
        System.out.println("User has approved the application.");
    }

    @Override
    public void rejectApplication() {
        System.out.println("User cannot reject the application.");
    }
}
