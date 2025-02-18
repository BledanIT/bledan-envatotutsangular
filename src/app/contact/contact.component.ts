import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {createInvalidDomainInValidator} from './invalidEmailDomain';

const invalidEmailDomain = createInvalidDomainInValidator(['gmail.com', 'yahoo.com', 'hotmail.com']);

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = new FormGroup({
    senderNameControl: new FormControl('', Validators.required),
    senderEmailControl: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessageControl: new FormControl('', [Validators.required, Validators.minLength(10)])
});

  

  submitForm() {
    console.log(this.contactForm.valid);
  }
}
