import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';
import * as OrbitControls from 'three-orbitcontrols';

@Component({
    selector: 'scene',
    templateUrl: './scene.component.html',
    styleUrls: ['./scene.component.scss']
})

export class SceneComponent implements AfterViewInit {

    private renderer: THREE.WebGLRenderer;
    private camera: THREE.PerspectiveCamera;

    public scene: THREE.Scene;

    public fieldOfView: number = 40;
    public nearClippingPane: number = 0.1;
    public farClippingPane: number = 1000;

    public controls: OrbitControls;

    @ViewChild('canvas',{static: true})
    private canvasRef: ElementRef;

    constructor() {}

    private get canvas(): HTMLCanvasElement {
        return this.canvasRef.nativeElement;
    }

    private createScene() {
        this.scene = new THREE.Scene();

        // Ground plane
        const geom00 = new THREE.PlaneGeometry( 180, 180, 16, 16 );
        const mat00 = new THREE.MeshLambertMaterial( {
            color: 0xffffff,
            side: THREE.DoubleSide,
            wireframe: false
        } );
        const ground = new THREE.Mesh( geom00, mat00 );
        ground.rotateX(Math.PI/2);
        ground.translateZ(17);
        ground.receiveShadow = true;

        // TorusKnot Object
        const geom01 = new THREE.TorusKnotGeometry(10, 3, 100, 16 );
        const mat01 = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
        const torusKnot = new THREE.Mesh( geom01, mat01 );

        torusKnot.position.set(-50,0,-50);

        // Ring Object
        const geom02 = new THREE.RingGeometry(4, 10, 16);
        const mat02 = new THREE.MeshLambertMaterial({
            color: 0xffff00,
            side: THREE.DoubleSide
        } );
        const rgeom = new THREE.Mesh(geom02, mat02)
        rgeom.position.set(0,0,0);
        rgeom.rotation.y = Math.PI/4;

        this.scene.add(new THREE.AxesHelper(50));

        this.scene.add(ground);
        this.scene.add(torusKnot);
        this.scene.add(rgeom);
    }

    private createLight() {
        var dLight = new THREE.DirectionalLight( 0xffffff, 0.1 );
        var helper = new THREE.DirectionalLightHelper( dLight, 3 );
        dLight.position.set(0,30,30);
        dLight.rotation.x = Math.PI/4;

        var splight01 = new THREE.SpotLight(0xffffff);
        splight01.position.set(-50, 25, 100);

        var splight02 = new THREE.SpotLight(0xffffff);
        splight02.position.set(50, -25, -100);

        this.scene.add(dLight);
        this.scene.add(helper);
        this.scene.add(splight01);
        this.scene.add(splight02);
    }

    private createCamera() {
        let aspectRatio = this.getAspectRatio();
        this.camera = new THREE.PerspectiveCamera(
            this.fieldOfView,
            aspectRatio,
            this.nearClippingPane,
            this.farClippingPane
        );

        // Set position and look at
        this.camera.position.x = 10;
        this.camera.position.y = 10;
        this.camera.position.z = 100;
    }

    private getAspectRatio(): number {
        let height = this.canvas.clientHeight;
        if (height === 0) {
            return 0;
        }
        return this.canvas.clientWidth / this.canvas.clientHeight;
    }

    private startRendering() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        });
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        //this.renderer.setClearColor(0xaaaaaa, 1);
        //this.renderer.autoClear = true;

        let component: SceneComponent = this;

        (function render() {
            requestAnimationFrame(render);
            component.render();
        }());
    }

    public render() {
        this.renderer.render(this.scene, this.camera);
    }

    public addControls() {
        this.controls = new OrbitControls(this.camera);
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 0.5;
        this.controls.addEventListener('change', this.render);

    }

    /* EVENTS */

    public onMouseDown(event: MouseEvent) {
        console.log("onMouseDown");
        event.preventDefault();

        // Example of mesh selection/pick:
        var raycaster = new THREE.Raycaster();
        var mouse = new THREE.Vector2();
        mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
        mouse.y = - (event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, this.camera);

        var obj: THREE.Object3D[] = [];
        this.findAllObjects(obj, this.scene);
        var intersects = raycaster.intersectObjects(obj);
        console.log("Scene has " + obj.length + " objects");
        console.log(intersects.length + " intersected objects found")
        intersects.forEach((i) => {
            console.log(i.object); // do what you want to do with object
        });

    }

    private findAllObjects(pred: THREE.Object3D[], parent: THREE.Object3D) {
        // NOTE: Better to keep separate array of selected objects
        if (parent.children.length > 0) {
            parent.children.forEach((i) => {
                pred.push(i);
                this.findAllObjects(pred, i);                
            });
        }
    }

    public onMouseUp(event: MouseEvent) {
        console.log("onMouseUp");
    }


    @HostListener('window:resize', ['$event'])
    public onResize(event: Event) {
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        console.log("onResize: " + this.canvas.clientWidth + ", " + this.canvas.clientHeight);

        this.camera.aspect = this.getAspectRatio();
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.render();
    }

    @HostListener('document:keypress', ['$event'])
    public onKeyPress(event: KeyboardEvent) {
        console.log("onKeyPress: " + event.key);
    }

    /* LIFECYCLE */
    ngAfterViewInit() {
        this.createScene();
        this.createLight();
        this.createCamera();
        this.startRendering();
        this.addControls();
    }

}