import * as THREE from 'three';
import { Injectable, ElementRef, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class D2Service implements OnDestroy {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;

  private scene: THREE.Scene;
  private light: THREE.AmbientLight;
  private frameId: number = null;


  constructor() { }

  public ngOnDestroy() {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    this.canvas = canvas.nativeElement;

    /* Render engine */
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      //alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(window.innerWidth/1.4, window.innerHeight/1.4);

    this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
    this.camera.position.set( 0, 0, 80 );
    this.camera.lookAt( 0, 0, 0 );

    // create the scene
    this.scene = new THREE.Scene();

    // Create coordinate axes
    var xAxes = new THREE.Geometry();
    xAxes.vertices.push(new THREE.Vector3(-30,0,0));
    xAxes.vertices.push(new THREE.Vector3(30,0,0));
    var xAxe = new THREE.Line( xAxes, new THREE.LineBasicMaterial( { color : 0xff0000} ));

    var yAxes = new THREE.Geometry();
    yAxes.vertices.push(new THREE.Vector3(0,-25,0));
    yAxes.vertices.push(new THREE.Vector3(0,25,0));
    var yAxe = new THREE.Line( yAxes, new THREE.LineBasicMaterial( { color : 0x00ff00} ));

    this.scene.add(xAxe);
    this.scene.add(yAxe);
 
    // Create spline curve as point array
    var curve = new THREE.SplineCurve( [
      new THREE.Vector2( -20, 0 ),
      new THREE.Vector2( -10, 10 ),
      new THREE.Vector2( 0, 0 ),
      new THREE.Vector2( 10, -10 ),
      new THREE.Vector2( 20, 0 )
    ] );

    var points = curve.getPoints( 150 );
    var cgeom = new THREE.BufferGeometry().setFromPoints( points );
    var cmat = new THREE.LineBasicMaterial( { color : 0xffff00 } );

    var splineObject = new THREE.Line( cgeom, cmat);

    // Create Polyline
    var material = new THREE.LineBasicMaterial( { color: 0xf9e79f  } ); 
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3( -25 ,0, 0) );
    geometry.vertices.push(new THREE.Vector3( -10, 20, 0) );
    geometry.vertices.push(new THREE.Vector3( 25, 0, 0) );
    geometry.vertices.push(new THREE.Vector3( -10, -10, 0) );
    geometry.vertices.push(new THREE.Vector3( -25, 0, 0) );

    var line = new THREE.Line( geometry, material );

    this.scene.add(line);
    this.scene.add(splineObject);

    this.renderer.render( this.scene, this.camera );
  }
}
