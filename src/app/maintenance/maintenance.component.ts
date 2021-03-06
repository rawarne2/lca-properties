import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormControl, FormGroup } from '@angular/forms';
import { EmailService } from '../emailService.service';
// const nodemailer = require('nodemailer');
// import nodemailer from 'nodemailer';
import * as nodemailer from 'nodemailer';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MaintenanceComponent implements OnInit {

  // properties: SelectItem[];
  maintenanceForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    emailAddress: new FormControl(''),
    aptNumber: new FormControl(''),
    maintenanceLocation: new FormControl(''),
    details: new FormControl('')
  })
  val = this.maintenanceForm.value;

  constructor(private emailService: EmailService) {
    // this.properties = [   { label: 'Select Property', value: null },   { label:
    // 'Rental Homes', value: { id: 1, name: 'Rental Homes' }},   { label:
    // 'Blacstone', value: { id: 1, name: 'Blacstone' }},   { label: 'Princeton',
    // value: { id: 1, name: 'Princeton' }}, ] this will eventually be used when
    // more locations are added
  }

  ngOnInit() {
  }

  processForm() {
    const name = `${this.maintenanceForm.value.firstName} ${this.maintenanceForm.value.lastName}`
    const phoneNumber = `${this.maintenanceForm.value.phoneNumber}`
    const emailAddress = `${this.maintenanceForm.value.emailAddress}`
    const aptNumber = `${this.maintenanceForm.value.aptNumber}`
    const maintenance = `${this.maintenanceForm.value.maintenanceLocation}`
    const details = `${this.maintenanceForm.value.details}`
    
    const allInfo = {name, phoneNumber, emailAddress, aptNumber, maintenance, details}
    this.emailService.sendMaintenanceRequest(allInfo);
    alert('Your maintenance request has been submitted!');
  }

}
