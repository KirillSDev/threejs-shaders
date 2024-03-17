import * as THREE from 'three';


const parameters = {
    width: window.innerWidth,
    height: window.innerHeight,
}

const canvas = document.querySelector("webgl");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera();


scene.add(camera);

const planeGeometry = new THREE.PlaneGeometry(10, 10);
const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
})
const planeMesh = new THREE.Mesh(planeGeometry, material);




const renderer = new THREE.WebGL1Renderer({canvas})
renderer.setSize(parameters.width, parameters.height);