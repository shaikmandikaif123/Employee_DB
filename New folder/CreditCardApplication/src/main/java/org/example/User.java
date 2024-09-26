package org.example;

// User class with Address Composition
public class User {
    private String name;
    private Address address; // Composition: User "has an" Address

    public User(String name, Address address) {
        this.name = name;
        this.address = address;
    }

    public String getUserDetails() {
        return "Name: " + name + "Address: " + address.getFullAddress();
    }
}
