import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact, phoneTypeValues, addressTypeValues } from './contact.model';
import { CommonModule } from '@angular/common';
import { restrictedWordsValidator } from './validators/restricted-words.validator';
import { debounceTime, distinct, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-edit-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent implements OnInit{

  phoneTypes = phoneTypeValues;
  addressTypes = addressTypeValues;

  private fb = inject(FormBuilder);

  contactForm = this.fb.nonNullable.group({
    id: '',
    personal: false,
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: '',
    dateOfBirth: <Date | null> null,
    favoritesRanking: <number | null> null,

    notes: ['', restrictedWordsValidator(['foo', 'bar'])],

    phones: this.fb.array([this.createPhoneGroup()]),

    address: this.fb.nonNullable.group({
      streetAddress: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      addressType: '',
    }),
  });

  constructor() { }
  
  ngOnInit(): void {
    const contact: Contact = {
      id: '',
      personal: false,
      firstName: '',
      lastName: 'Ancle',
      dateOfBirth: null,
      favoritesRanking: null,
      notes: "",
      phones: [{phoneNumber: '+123111231', phoneType: 'work', preferred: true}, {phoneNumber: '+100000000', phoneType: 'mobile', preferred: false}],
      address:{
        streetAddress: undefined,
        city: "London",
        postalCode: undefined,
        addressType: undefined,
      }
    };

    for (let i = 1; i < contact.phones.length; i++) {
      this.addPhone();     
    }

    this.contactForm.patchValue(contact);
    this.subscribeToAddressChanges();
  }
  
  addPhone() {
    this.contactForm.controls.phones.push(this.createPhoneGroup());
  }

  subscribeToAddressChanges() {

    const addressGroup = this.contactForm.controls.address;

    addressGroup.valueChanges
      .pipe(distinctUntilChanged(this.stringifyCompare))
      .subscribe(() => {
        for(const controlName in addressGroup.controls){
          addressGroup.get(controlName)?.removeValidators([Validators.required]);
          addressGroup.get(controlName)?.updateValueAndValidity();
        }
      });

    addressGroup.valueChanges
      .pipe(debounceTime(2000), distinctUntilChanged(this.stringifyCompare))
      .subscribe(() => {
        for(const controlName in addressGroup.controls){
          addressGroup.get(controlName)?.addValidators([Validators.required]);
          addressGroup.get(controlName)?.updateValueAndValidity();
        }
      });
  }

  stringifyCompare(a:any, b:any) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  createPhoneGroup() {

    const phoneGroup  =  this.fb.nonNullable.group({
      phoneNumber:  '',
      phoneType:  '',
      preferred: false,
    });

    phoneGroup.controls.preferred.valueChanges
    .pipe(distinctUntilChanged(this.stringifyCompare))
    .subscribe(value => {
      if(value){
        phoneGroup.controls.phoneNumber.addValidators([Validators.required]);
      } else {
        phoneGroup.controls.phoneNumber.removeValidators([Validators.required]);
      }
      phoneGroup.controls.phoneNumber.updateValueAndValidity();
    });

    return phoneGroup;
  }

  get firstName(){
    return this.contactForm.controls['firstName'];
  }

  get notes(){
    return this.contactForm.controls['notes'];
  }

  saveContact() {
    console.log(this.contactForm.controls['firstName'].value);
    console.log(this.contactForm.controls['lastName'].value);
    console.log(this.contactForm.controls['dateOfBirth'].value);
    console.log(this.contactForm.controls['favoritesRanking'].value);
    console.log(this.contactForm.controls['personal'].value);
  }
}
