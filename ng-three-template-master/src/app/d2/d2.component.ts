import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { D2Service } from './d2.service';

@Component({
  selector: 'app-d2',
  templateUrl: './d2.component.html'
})
export class D2Component implements OnInit {

  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  constructor(private d2Serv: D2Service) { }

  ngOnInit() {
    this.d2Serv.createScene(this.rendererCanvas);
    //this.d2Serv.animate();
  }

}