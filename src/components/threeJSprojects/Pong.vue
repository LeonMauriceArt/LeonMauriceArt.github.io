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
      this.camera = new THREE.PerspectiveCamera(50, 1, 0.2, 2000);
      this.camera.position.z = 1.1;
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
        '/src/assets/glb/pong.glb',
        (gltf) => {
          this.model = gltf.scene;
          this.model.scale.setScalar(0.08);
          this.model.rotation.x += 0.5;
          this.model.traverse((c) => (c.castShadow = true));

          const newMaterial = new THREE.MeshToonMaterial({ color: 0xe8d1ff });
          this.model.traverse((child) => {
            if (child.isMesh) {
              child.material = newMaterial;
            }
          });

          this.mixer = new THREE.AnimationMixer(this.model);
          if (gltf.animations && gltf.animations.length > 0) {
            const action = this.mixer.clipAction(gltf.animations[0]);
            action.play();
          }
          this.scene.add(this.model);
          this.outlinePass.selectedObjects = [this.model];
        },
        undefined,
        (error) => {
          console.error('An error occurred while loading the model', error);
        }
      );
    },
    setupLights() {
      const dirLight1 = new THREE.DirectionalLight(0xffffff, 2);
      dirLight1.position.set(0, 2, 0);
      dirLight1.castShadow = true;
      this.scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
      dirLight2.position.set(2, -2, 2);
      dirLight2.castShadow = true;
      this.scene.add(dirLight2);

      const ambientLight = new THREE.AmbientLight(0xababab);
      this.scene.add(ambientLight);
    },
    setupPostProcessing() {
      this.composer = new EffectComposer(this.renderer);
      const renderPass = new RenderPass(this.scene, this.camera);
      this.composer.addPass(renderPass);

      this.outlinePass = new OutlinePass(new THREE.Vector2(300, 300), this.scene, this.camera);
      this.outlinePass.edgeStrength = 3;
      this.outlinePass.edgeGlow = 2;
      this.outlinePass.edgeThickness = 2;
      this.outlinePass.pulsePeriod = 0;
      this.outlinePass.visibleEdgeColor.set('#da64ff');
      this.outlinePass.hiddenEdgeColor.set('#ffffff');
      this.composer.addPass(this.outlinePass);

      const effectFXAA = new ShaderPass(FXAAShader);
      effectFXAA.uniforms['resolution'].value.set(1 / 300, 1 / 300);
      this.composer.addPass(effectFXAA);
    },
    animate() {
      this.animateLoop = () => {
        requestAnimationFrame(this.animateLoop);
        if (this.mixer) {
          this.mixer.update(0.01);
        }
        if (this.model) {
          this.model.rotation.y += 0.01;
        }
        this.composer.render();
      };
      this.animateLoop();
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
