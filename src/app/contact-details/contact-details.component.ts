import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private contactService : ContactService) { }
  contact: Contact;

  ngOnInit(): void {
    this.getContactById();
  }

  getContactById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contactService.getContactById(id)
      .subscribe(contact => this.contact = contact);
  }

}
