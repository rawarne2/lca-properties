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
      { source: 'assets/images/princeton/princeton-living-room.jpg', alt: 'Princeton Living Room', title: '1' },
      { source: 'assets/images/princeton/princeton-bathroom.jpg', alt: 'Princeton Bathroom', title: '2' },
      { source: 'assets/images/princeton/princeton-bath-from-hall.jpg', alt: 'Princeton Bathroom from Hallway', title: '3' },
      { source: 'assets/images/princeton/princeton-hall.jpg', alt: 'Princeton Hallway from bedroom', title: '4' },
      { source: 'assets/images/princeton/princeton-bathroom-1.jpg', alt: 'Princeton Hallway from bedroom', title: '5' },
      { source: 'assets/images/princeton/princeton-bathroom-2.jpg', alt: 'Princeton Hallway from bedroom', title: '6' },
      { source: 'assets/images/princeton/princeton-bathroom-3.jpg', alt: 'Princeton Hallway from bedroom', title: '7' },
      { source: 'assets/images/princeton/princeton-bedroom-1.jpg', alt: 'Princeton Hallway from bedroom', title: '8' },
      { source: 'assets/images/princeton/princeton-bedroom-2.jpg', alt: 'Princeton Hallway from bedroom', title: '9' },
      { source: 'assets/images/princeton/princeton-bedroom-4.jpg', alt: 'Princeton Hallway from bedroom', title: '10' },
      { source: 'assets/images/princeton/princeton-bedroom-closet-2.jpg', alt: 'Princeton Hallway from bedroom', title: '11' },
      { source: 'assets/images/princeton/princeton-bedroom-closet.jpg', alt: 'Princeton Hallway from bedroom', title: '12' },
      { source: 'assets/images/princeton/princeton-hall-2.jpg', alt: 'Princeton Hallway from bedroom', title: '13' },
      { source: 'assets/images/princeton/princeton-kitchen-2.jpg', alt: 'Princeton Hallway from bedroom', title: '14' },
      { source: 'assets/images/princeton/princeton-kitchen.jpg', alt: 'Princeton Hallway from bedroom', title: '15' },
      { source: 'assets/images/princeton/princeton-livingroom-1.jpg', alt: 'Princeton Hallway from bedroom', title: '16' },
      { source: 'assets/images/princeton/princeton-livingroom-2.jpg', alt: 'Princeton Hallway from bedroom', title: '17' },
      { source: 'assets/images/princeton/princeton-livingroom-3.jpg', alt: 'Princeton Hallway from bedroom', title: '18' },
    ]
  }

}
