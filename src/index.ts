import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './styles.scss'


// Canvas
const canvas = document.querySelector("canvas.webgl") as HTMLCanvasElement;
const scene = new THREE.Scene();


const parameters = {
    width: window.innerWidth,
    height: window.innerHeight,
}

// Object
const planeGeometry = new THREE.PlaneGeometry(2, 2, 32, 32);
const material = new THREE.MeshBasicMaterial({
    color: '#ffffff',
})
const planeMesh = new THREE.Mesh(planeGeometry, material);

scene.add(planeMesh);

// Camera
const camera = new THREE.PerspectiveCamera(75, parameters.width / parameters.height);
camera.position.z = 3;
camera.position.y = 0.5;

scene.add(camera)
// Renderer
const renderer = new THREE.WebGL1Renderer({
    canvas
})
renderer.setSize(parameters.width, parameters.height);
const controls = new OrbitControls( camera, canvas );


renderer.render(scene, camera);


const tick = () => {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
}
tick();