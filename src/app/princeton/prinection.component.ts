import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-princeton',
  templateUrl: './princeton.component.html',
  styleUrls: ['./princeton.component.css']
})
export class PrincetonComponent implements OnInit {

  images: any[];
  pWidth: Number;
  pHeight: Number;
  customStyle: Object;

  constructor() { }

  ngOnInit() {
    this.images = [
      { source: 'assets/images/princeton/princeton-living-room.jpg', title: 'Living Room' },
      { source: 'assets/images/princeton/princeton-livingroom-1.jpg' },
      { source: 'assets/images/princeton/princeton-livingroom-2.jpg'},
      { source: 'assets/images/princeton/princeton-livingroom-3.jpg' },
      { source: 'assets/images/princeton/princeton-bathroom.jpg', title: 'Bathroom' },
      { source: 'assets/images/princeton/princeton-bathroom-2.jpg' },
      { source: 'assets/images/princeton/princeton-bathroom-3.jpg' },
      { source: 'assets/images/princeton/princeton-bedroom-1.jpg', title: 'Bedroom' },
      { source: 'assets/images/princeton/princeton-bedroom-2.jpg' },
      { source: 'assets/images/princeton/princeton-bedroom-4.jpg' },
      { source: 'assets/images/princeton/princeton-bedroom-closet-2.jpg' },
      { source: 'assets/images/princeton/princeton-bedroom-closet.jpg' },
      { source: 'assets/images/princeton/princeton-kitchen-2.jpg', title: 'Kitchen' },
      { source: 'assets/images/princeton/princeton-kitchen.jpg' },
      { source: 'assets/images/princeton/princeton-hall-2.jpg', title: 'Hallway' },
      { source: 'assets/images/princeton/princeton-hall.jpg'},
    ]
  }

}
