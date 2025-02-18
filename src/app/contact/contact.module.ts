import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, ContactComponent
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
