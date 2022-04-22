import * as THREE from 'three'


export class SpotLight1  {
    light: THREE.SpotLight

    constructor() {
     
        this.light = new THREE.SpotLight(0xffffff)
        this.light.position.set(2, 4, 4);
        this.light.intensity =10

        this.light.castShadow = true;

        this.light.shadow.mapSize.width = 1024;
        this.light.shadow.mapSize.height = 1024;

        this.light.shadow.camera.near = 500;
        this.light.shadow.camera.far = 4000;
        this.light.shadow.camera.fov = 30;
        
    }

}