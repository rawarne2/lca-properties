import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-princeton',
  templateUrl: './princeton.component.html',
  styleUrls: ['./princeton.component.css']
})
export class PrincetonComponent implements OnInit {

  images: any[];

  constructor() { }

  ngOnInit() {
    this.images = [
      { source: 'assets/images/princeton/princeton-living-room.jpg', alt: 'Princeton Living Room', title: 'Princeton Living Room' },
      { source: 'assets/images/princeton/princeton-bathroom.jpg', alt: 'Princeton Bathroom', title: 'Princeton Bathroom' },
      { source: 'assets/images/princeton/princeton-bath-from-hall.jpg', alt: 'Princeton Bathroom from Hallway', title: 'Princeton Bathroom from Hallway' },
      { source: 'assets/images/princeton/princeton-hall.jpg', alt: 'Princeton Hallway from bedroom', title: 'Princeton Hallway from bedroom' },
      { source: 'assets/images/princeton/princeton-bathroom-1.jpg', alt: 'Princeton Hallway from bedroom', title: 'Princeton Hallway from bedroom' },
      { source: 'assets/images/princeton/princeton-bathroom-2.jpg', alt: 'Princeton Hallway from bedroom', title: 'Princeton Hallway from bedroom' },
      { source: 'assets/images/princeton/princeton-bathroom-3.jpg', alt: 'Princeton Hallway from bedroom', title: 'Princeton Hallway from bedroom' },
      { source: 'assets/images/princeton/princeton-bedroom-1.jpg', alt: 'Princeton Hallway from bedroom', title: 'Princeton Hallway from bedroom' },
      { source: 'assets/images/princeton/princeton-bedroom-2.jpg', alt: 'Princeton Hallway from bedroom', title: 'Princeton Hallway from bedroom' },
      { source: 'assets/images/princeton/princeton-bedroom-4.jpg', alt: 'Princeton Hallway from bedroom', title: 'Princeton Hallway from bedroom' },
      { source: 'assets/images/princeton/princeton-bedroom-closet-2.jpg', alt: 'Princeton Hallway from bedroom', title: 'Princeton Hallway from bedroom' },
      { source: 'assets/images/princeton/princeton-bedroom-closet.jpg', alt: 'Princeton Hallway from bedroom', title: 'Princeton Hallway from bedroom' },
      { source: 'assets/images/princeton/princeton-hall-2.jpg', alt: 'Princeton Hallway from bedroom', title: 'Princeton Hallway from bedroom3' },
      { source: 'assets/images/princeton/princeton-kitchen-2.jpg', alt: 'Princeton Hallway from bedroom', title: 'Princeton Hallway from bedroom' },
      { source: 'assets/images/princeton/princeton-kitchen.jpg', alt: 'Princeton Hallway from bedroom', title: 'Princeton Hallway from bedroom' },
      { source: 'assets/images/princeton/princeton-livingroom-1.jpg', alt: 'Princeton Hallway from bedroom', title: 'Princeton Hallway from bedroom' },
      { source: 'assets/images/princeton/princeton-livingroom-2.jpg', alt: 'Princeton Hallway from bedroom', title: 'Princeton Hallway from bedroom' },
      { source: 'assets/images/princeton/princeton-livingroom-3.jpg', alt: 'Princeton Hallway from bedroom', title: 'Princeton Hallway from bedroom' },

    ]
  }

}
