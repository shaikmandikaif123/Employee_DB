package org.example;

import org.example.composition.Address;
import org.example.composition.ContactInfo;

// User class with Address and Contacts Composition
public class User {
    private String name;
    private Address address;// Composition: User "has an" Address
    private ContactInfo contacts;// Composition: User "has a" contacts

    public User(String name, Address address,ContactInfo contacts) {
        this.name = name;
        this.address = address;
        this.contacts=contacts;
    }

    public String getUserDetails() {
        return "Name: " + name + "Address: " + address.getFullAddress();
    }

    public String getContsctDetails() {
        return contacts.getContacts();
    }
}
