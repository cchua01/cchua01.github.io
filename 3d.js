import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-background').appendChild(renderer.domElement);

// Camera controls
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 0, 10);
controls.update();

// Milky Way Background
const textureLoader = new THREE.TextureLoader();
const milkyWayTexture = textureLoader.load('https://www.eso.org/public/archives/images/publicationjpg/eso0932a.jpg');
const milkyWayGeometry = new THREE.SphereGeometry(1000, 64, 64);
const milkyWayMaterial = new THREE.MeshBasicMaterial({
  map: milkyWayTexture,
  side: THREE.BackSide
});
const milkyWay = new THREE.Mesh(milkyWayGeometry, milkyWayMaterial);
scene.add(milkyWay);

// Stars
const starsGeometry = new THREE.BufferGeometry();
const starCount = 10000;
const positions = new Float32Array(starCount * 3);
for (let i = 0; i < starCount; i++) {
  positions[i * 3 + 0] = THREE.MathUtils.randFloatSpread(2000); // x
  positions[i * 3 + 1] = THREE.MathUtils.randFloatSpread(2000); // y
  positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(2000); // z
}
starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const starsMaterial = new THREE.PointsMaterial({ color: 0x888888, size: 0.7 });
const stars = new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
  renderer.render(scene, camera);
}

animate();

// Adjust the renderer size when the window is resized
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
