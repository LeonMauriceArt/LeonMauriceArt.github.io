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
      const loader = new GLTFLoader();
      loader.load(
        '/src/assets/glb/cartoon_head.glb',
        (gltf) => {
          this.model = gltf.scene;
          this.model.scale.setScalar(0.2);
          this.model.scale.x -= 0.38;
          this.model.traverse((c) => (c.castShadow = true));
          this.applyMaterials();
          this.setupAnimation(gltf);
          this.scene.add(this.model);
          this.outlinePass.selectedObjects = [this.model];
        },
        undefined,
        (error) => {
          console.error('An error occurred while loading the model', error);
        }
      );
    },
    applyMaterials() {
      const skinMaterial = new THREE.MeshToonMaterial({ color: 0xf1e5d6 });
      const hairMaterial = new THREE.MeshToonMaterial({ color: 0x956c55 });
      const glassMaterial = new THREE.MeshStandardMaterial({
        emissive: 0x99c1f1,
        roughness: 0,
        transparent: true,
        opacity: 0.4,
      });
      this.model.traverse((child) => {
        if (child.isMesh) {
          if (child.name === 'head' || child.name === 'nose' || child.name === 'ear')
            child.material = skinMaterial;
          if (['Cube001', 'Icosphere001', 'Icosphere', 'Icosphere002', 'Cube002'].includes(child.name))
            child.material = hairMaterial;
          if (child.name === 'glasses') child.material = glassMaterial;
        }
      });
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
      const dirLight = new THREE.DirectionalLight(0xffffff, 2);
      dirLight.position.set(2, 2, 2);
      dirLight.castShadow = true;
      this.scene.add(dirLight);

      const ambientLight = new THREE.AmbientLight(0xffffff);
      this.scene.add(ambientLight);
    },
    setupPostProcessing() {
      this.composer = new EffectComposer(this.renderer);
      const renderPass = new RenderPass(this.scene, this.camera);
      this.composer.addPass(renderPass);

      this.outlinePass = new OutlinePass(new THREE.Vector2(300, 300), this.scene, this.camera);
      this.outlinePass.edgeStrength = 0.5;
      this.outlinePass.edgeGlow = 25;
      this.outlinePass.edgeThickness = 10;
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
      this.model.rotation.x = Math.sin(this.floatFactor) * 0.05;
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
