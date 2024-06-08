<template>
  <div ref="container"></div>
</template>

<script>
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

const PixelationShader = {
  uniforms: {
    'tDiffuse': { value: null },
    'resolution': { value: new THREE.Vector2() },
    'pixelSize': { value: 8.0 }
  },
  vertexShader: `
    varying highp vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    uniform float pixelSize;
    varying highp vec2 vUv;
    void main() {
      vec2 dxy = pixelSize / resolution;
      vec2 coord = dxy * floor(vUv / dxy);
      gl_FragColor = texture2D(tDiffuse, coord);
    }
  `
};

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
      this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
      this.camera.position.z = 5;
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
      const loader = new OBJLoader();
      loader.load(
        '/assets/obj/spinningtop.obj',
        (obj) => {
          this.model = obj;
          const newMaterial = new THREE.MeshStandardMaterial({ color: 0xe8d1ff});
          this.model.traverse((child) => {
            if (child.isMesh) {
              child.material = newMaterial;
            }
          });
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
      const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
      dirLight1.position.set(0, 2, 0);
      dirLight1.castShadow = true;
      this.scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0xffffff, 1);
      dirLight2.position.set(2, -2, 2);
      dirLight2.castShadow = true;
      this.scene.add(dirLight2);

      const ambientLight = new THREE.AmbientLight(0xababab, 4);
      this.scene.add(ambientLight);
    },
    setupPostProcessing() {
      this.composer = new EffectComposer(this.renderer);
      const renderPass = new RenderPass(this.scene, this.camera);
      this.composer.addPass(renderPass);

      this.outlinePass = new OutlinePass(new THREE.Vector2(300, 300), this.scene, this.camera);
      this.outlinePass.edgeStrength = 5;
      this.outlinePass.edgeGlow = 0.7;
      this.outlinePass.edgeThickness = 5;
      this.outlinePass.pulsePeriod = 0;
      this.outlinePass.visibleEdgeColor.set('#da64ff');
      this.outlinePass.hiddenEdgeColor.set('#ffffff');
      this.composer.addPass(this.outlinePass);

      const effectFXAA = new ShaderPass(FXAAShader);
      effectFXAA.uniforms['resolution'].value.set(1 / 300, 1 / 300);
      this.composer.addPass(effectFXAA);
  
    },
    animate() {
      this.floatFactor = 0;
      this.animateLoop = () => {
        requestAnimationFrame(this.animateLoop);
        if (this.model) {
          this.floatFactor += 0.01;
          this.model.rotation.z =  Math.sin(this.floatFactor) * 0.4;
          this.model.rotation.y += 0.05;
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
