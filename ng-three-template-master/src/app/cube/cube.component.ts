import { AfterViewInit, Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'geometry-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements AfterViewInit {

  @ViewChild('rendererContainer',{static: true})
  rendererContainer: ElementRef;

  renderer = new THREE.WebGLRenderer({antialias: true});
  scene = null;
  camera = null;
  light = null;
  mesh = null;

  constructor() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 400;

    this.light = new THREE.DirectionalLight( 0xffffff, 0.8 );
    this.light.position.set(0,0,10);

    this.scene.add(this.light);

    const geometry = new THREE.BoxGeometry(200, 200, 200);
    const material = new THREE.MeshPhongMaterial({
      color: 0xff0000,
      shininess: 100
    });

    this.mesh = new THREE.Mesh(geometry, material);

    this.scene.add(this.mesh);
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth/1.5, window.innerHeight/1.5);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
    
  }

  @HostListener('window:resize', ['$event'])
    onWindowResize(event) {
    this.renderer.setSize(event.target.innerWidth, event.target.innerHeight)
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}
