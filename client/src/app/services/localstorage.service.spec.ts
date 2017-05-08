import { inject, TestBed } from '@angular/core/testing';
import { LocalStorageService } from './localstorage.service';
import { Contact } from "../contact/contact";
import 'rxjs/add/observable/of';
import * as _ from 'lodash';

describe('ContactLocalStorageService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
  });

  //Local Storage Mock
  beforeEach(() => {
    let store = {};

    spyOn(localStorage, 'getItem').and.callFake(function (key) {
      return store[key];
    });

    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      store[key] = value;
    });
  });

  function contactArray(){
    return [
      new Contact(1, 'First', 'Contact', '1234567', 'Street Address', 'City'),
      new Contact(2, 'Second', 'Contact', '1234567', 'Street Address', 'City'),
      new Contact(3, 'Third', 'Contact', '1234567', 'Street Address', 'City')
    ];
  }

  it('Should initialize local storage', inject([LocalStorageService], (service: LocalStorageService) => {
    let data = localStorage.getItem('ngContacts');
    expect(JSON.parse(data)).toEqual([]);
  }));

  it('#findContacts Should return all contacts', inject([LocalStorageService], (service: LocalStorageService) => {
    let contacts = contactArray();
    localStorage.setItem('ngContacts', JSON.stringify(contacts));
    let contactIds = _.map(contacts, 'id');
    service.findContacts().subscribe((contacts: Contact[]) => {
      expect(contacts.length).toBe(3);
      _.forEach(contacts, function (c) {
        expect(contactIds).toContain(c.id);
      });
    });
  }));

  it('#saveContact Should save contact to localstorage', inject([LocalStorageService], (service: LocalStorageService) => {
    let contact = new Contact(null, 'New', 'Contact', '12345678', 'Street Address', 'City');
    service.saveContact(contact).subscribe(() => {
      let data = JSON.parse(localStorage.getItem('ngContacts'));
      expect(data.length).toBeGreaterThan(0);
    });
  }));

  it('#deleteContact Should remove contact from localstorage', inject([LocalStorageService], (service: LocalStorageService) => {
    let contacts = contactArray();
    service.saveContact(contacts[0]);
    service.saveContact(contacts[1]);
    service.saveContact(contacts[2]);
    localStorage.setItem('ngContacts', JSON.stringify(contacts));
    let contact = contacts[1];
    service.deleteContact(contact).subscribe(() => {
      let data = JSON.parse(localStorage.getItem('ngContacts'));
      expect(data.length).toBe(2);
    });
  }));

  it('#editContact Should update existing contact in localstorage', inject([LocalStorageService], (service: LocalStorageService) => {
    
  }));

});
