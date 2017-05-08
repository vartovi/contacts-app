import { ContactAddressPipe } from "./contact-address.pipe";
import { Contact } from "../contact/contact";

describe('ContactAddressPipe', () => {

  let pipe = new ContactAddressPipe();

  it('should return streetAddress and city', () => {
    let contact = new Contact(null, 'FirstName', 'LastName', '01234567', 'StreetAddress', 'City');
    expect(pipe.transform(contact)).toBe(contact.streetAddress +  ', ' + contact.city);
  });

  it('should return streetAddress', () => {
    let contact = new Contact(null, 'FirstName', 'LastName', '01234567', 'StreetAddress', '');
    expect(pipe.transform(contact)).toBe(contact.streetAddress);
    contact.city = null;
    expect(pipe.transform(contact)).toBe(contact.streetAddress);
  });

  it('should return city', () => {
    let contact = new Contact(null, 'FirstName', 'LastName', '01234567', '', 'City');
    expect(pipe.transform(contact)).toBe(contact.city);
    contact.streetAddress = null;
    expect(pipe.transform(contact)).toBe(contact.city);
  });

  it('should return empty string', () => {
    let contact = new Contact(null, 'FirstName', 'LastName', '01234567', '', '');
    expect(pipe.transform(contact)).toBe('');
    expect(pipe.transform(null)).toBe('');
  });

});
