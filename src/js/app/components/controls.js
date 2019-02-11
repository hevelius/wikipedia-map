import * as THREE from 'three';

import FirstPersonControls from '../../utils/firstPersonControls';

import Config from '../../data/config';

export default class Controls {
  constructor(camera) {
    const firstPersonControls = FirstPersonControls(THREE);
    this.threeControls = new firstPersonControls( camera )
    this.init();
  }

  init() {
    this.threeControls.lookAt(Config.controls.target.x, Config.controls.target.y, Config.controls.target.z);
    this.threeControls.movementSpeed = Config.controls.movementSpeed;
    this.threeControls.lookSpeed = Config.controls.lookSpeed;
    this.threeControls.autoRotate = Config.controls.autoRotate;
    this.threeControls.autoRotateSpeed = Config.controls.autoRotateSpeed;
    this.threeControls.rotateSpeed = Config.controls.rotateSpeed;
    this.threeControls.zoomSpeed = Config.controls.zoomSpeed;
    this.threeControls.minDistance = Config.controls.minDistance;
    this.threeControls.maxDistance = Config.controls.maxDistance;
    this.threeControls.minPolarAngle = Config.controls.minPolarAngle;
    this.threeControls.maxPolarAngle = Config.controls.maxPolarAngle;
    this.threeControls.enableDamping = Config.controls.enableDamping;
    this.threeControls.enableZoom = Config.controls.enableZoom;
    this.threeControls.dampingFactor = Config.controls.dampingFactor;
  }
}
