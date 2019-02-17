import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MaintenanceComponent implements OnInit {

  properties: SelectItem[];

  constructor() {
    this.properties = [
      { label: 'Select Property', value: null },
      { label: 'Rental Homes', value: { id: 1, name: 'Rental Homes' }},
      { label: 'Blacstone', value: { id: 1, name: 'Blacstone' }},
      { label: 'Princeton', value: { id: 1, name: 'Princeton' }},
    ]
  }

  ngOnInit() {
  }
  
  submitProperty(property){
    console.log(property);
  }

}
