import { Component } from '@angular/core';

@Component({selector: 'ngbd-carousel-basic', templateUrl: './home.component.html'})

export class HomeComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1000/555`);
}