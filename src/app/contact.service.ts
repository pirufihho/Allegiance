import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private CONTACTS : Contact[] = [
{id:"1", salutation:"Mr.",firstName:"Paul",lastName:"Mitchell",addressLine1:"1222 56th St S",addressLine2:"apt 23",city:"Fargo",state:"ND",zipCode:"58104",emailAddress:"ash@example.com",telePhoneNumber:"5551345699"},
{id:"2",salutation:"Mr.2",firstName:"Paul2",lastName:"Mitchell2",addressLine1:"1222 56th St S2",addressLine2:"apt 232",city:"Fargo2",state:"ND2",zipCode:"581042",emailAddress:"ash@example.com2",telePhoneNumber:"55513456992"},
{id:"3",salutation:"Mr.3",firstName:"Paul3",lastName:"Mitchell3",addressLine1:"1222 56th St S3",addressLine2:"apt 233",city:"Fargo3",state:"ND3",zipCode:"581043",emailAddress:"ash@example.com3",telePhoneNumber:"55513456993"},
{id:"4", salutation:"Mr.4",firstName:"Paul4",lastName:"Mitchel4",addressLine1:"1222 56th St S4",addressLine2:"apt 24",city:"Fargo4",state:"ND4",zipCode:"58104",emailAddress:"ash@example.com4",telePhoneNumber:"55513456994"},
{id:"5",salutation:"Mr.5",firstName:"Paul5",lastName:"Mitchell5",addressLine1:"1222 56th St S5",addressLine2:"apt 235",city:"Fargo5",state:"ND5",zipCode:"581045",emailAddress:"ash@example.com5",telePhoneNumber:"55513456995"},
{id:"6",salutation:"Mr.6",firstName:"Paul6",lastName:"Mitchell6",addressLine1:"1222 56th St S6",addressLine2:"apt 236",city:"Fargo6",state:"ND6",zipCode:"581046",emailAddress:"ash@example.com6",telePhoneNumber:"55513456996"}
  ];

  constructor() {
    
   }

   getContacts(): Observable<Contact[]> {
    const contacts = of(this.CONTACTS);

    return contacts;

  }

  getContactById(id:string): Observable<Contact>{
    var contact = of(this.CONTACTS.find(x =>x.id==id));

    return contact;
  }
  }


