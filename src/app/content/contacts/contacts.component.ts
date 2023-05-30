import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  headerTitle: string = 'components-contacts-title';
  headerMessage: string = 'components-contacts-message';
  phone: string = 'components-contacts-phone';
  phoneNumber: string = 'components-contacts-phone-number';
  email: string = 'components-contacts-email';
  emailAddress: string = 'components-contacts-email-address';
  subject: string = 'components-contacts-subject';
  subjectPlaceholder: string = 'components-contacts-subject-placeholder';
  subjectRequired: string = 'components-contacts-subject-required';
  message: string = 'components-contacts-subject-message';
  messagePlaceholder: string =
    'components-contacts-subject-message-placeholder';
  messageRequired: string = 'components-contacts-subject-message-required';
  sendMessage: string = 'components-contacts-send-message';

  constructor(private router: Router) {}

  contactFormGroup = new FormGroup({
    subject: new FormControl(''),
    message: new FormControl(''),
  });

  ngOnInit(): void {}

  submit(): void {}
}
