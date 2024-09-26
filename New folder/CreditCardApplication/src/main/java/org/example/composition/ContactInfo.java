package org.example.composition;

public class ContactInfo {
    private String phonenumber;
    private String email;

    public ContactInfo(String phonenumber,String email){
        this.phonenumber=phonenumber;
        this.email=email;
    }

   public String getContacts(){
        return "Contacts :"+phonenumber + ", " + email ;
   }
}
