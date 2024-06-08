<template>
  <div ref="container"></div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

export default {
  mounted() {
    this.initThreeScene();
  },
  beforeDestroy() {
    this.cleanupThreeScene();
  },
  methods: {
    initThreeScene() {
      this.scene = new THREE.Scene();
      this.setupCamera();
      this.setupRenderer();
      this.loadModel();
      this.setupLights();
      this.setupPostProcessing();
      this.animate();
    },
    setupCamera() {
      this.camera = new THREE.PerspectiveCamera(5, 1, 0.2, 2000);
      this.camera.position.z = 15;
    },
    setupRenderer() {
      this.renderer = new THREE.WebGLRenderer({ alpha: true });
      this.renderer.setSize(300, 300);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.shadowMap.enabled = true;
      this.renderer.setClearColor(0x000000, 0);
      this.$refs.container.appendChild(this.renderer.domElement);
    },
    loadModel() {
        const texture = new THREE.TextureLoader().load('/assets/icons/cursor.png')
        const material = new THREE.MeshLambertMaterial({map : texture, transparent: true});
        this.model = new THREE.Mesh(new THREE.PlaneGeometry(1516, 2400), material);
        this.model.scale.setScalar(0.0003);
        this.model.rotation.x += 0.2;
        this.scene.add(this.model);
    },
    setupAnimation(gltf) {
      this.mixer = new THREE.AnimationMixer(this.model);
      if (gltf.animations && gltf.animations.length > 0) {
        const action = this.mixer.clipAction(gltf.animations[1]);
        action.play();
      }
      this.model.rotation.y += 0.2;
    },
    setupLights() {
      const ambientLight = new THREE.AmbientLight(0xffffff, 3);
      this.scene.add(ambientLight);
    },
    setupPostProcessing() {
      this.composer = new EffectComposer(this.renderer);
      const renderPass = new RenderPass(this.scene, this.camera);
      this.composer.addPass(renderPass);

      this.outlinePass = new OutlinePass(new THREE.Vector2(300, 300), this.scene, this.camera);
      this.outlinePass.edgeStrength = 0;
      this.outlinePass.edgeGlow = 0;
      this.outlinePass.edgeThickness = 0;
      this.outlinePass.pulsePeriod = 0;
      this.outlinePass.visibleEdgeColor.set('#da64ff');
      this.outlinePass.hiddenEdgeColor.set('#ff0000');
      this.composer.addPass(this.outlinePass);

      const effectFXAA = new ShaderPass(FXAAShader);
      effectFXAA.uniforms['resolution'].value.set(1 / 300, 1 / 300);
      this.composer.addPass(effectFXAA);
    },
    animate() {
      this.floatFactor = 0;
      const animateLoop = () => {
        requestAnimationFrame(animateLoop);
        if (this.mixer) this.mixer.update(0.01);
        if (this.model) this.updateModel();
        this.composer.render();
      };
      animateLoop();
    },
    updateModel() {
      this.floatFactor += 0.02;
      this.model.position.y = Math.sin(this.floatFactor) * 0.1;
      this.model.rotation.x = Math.sin(this.floatFactor) * 0.3;
      this.model.rotation.y = Math.cos(this.floatFactor) * 0.4;
      this.model.rotation.z = Math.cos(this.floatFactor) * 0.05;
    },
    cleanupThreeScene() {
      if (this.renderer) {
        this.renderer.dispose();
        this.renderer.forceContextLoss();
        this.$refs.container.removeChild(this.renderer.domElement);
      }
      if (this.scene) {
        this.scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) object.material.dispose();
        });
      }
    }
  }
};
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
