import * as THREE from "./lib/three.module.js";

const menuBtn = document.querySelector('.hamburger')
const exitBtn = document.querySelector('.exit')
const menu = document.querySelector('aside')

menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.toggle('toggle-menu');
})
exitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.toggle('toggle-menu');
})


window.addEventListener('load', () => {
    const canvas = document.getElementById("canvas");

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0xffffff, 0);

    canvas.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 1.5;


    const geometry = new THREE.BoxGeometry();
    const materialArray = [
        new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Right side
        new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Left side
        new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Top side
        new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Bottom side
        new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Front side
        new THREE.MeshBasicMaterial({ color: 0x0000ff }) // Back side
    ];
    const cube = new THREE.Mesh(geometry, materialArray);
    scene.add(cube);

    const canvasTexture = new THREE.CanvasTexture(createTextCanvas("Sup, tuck!"));
    materialArray[4].map = canvasTexture;
    materialArray[4].needsUpdate = true;


    function createTextCanvas(text) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 512;
        canvas.height = 512;
        context.font = "Bold 80px Arial";
        context.fillStyle = "white";
        context.textAlign = "center";
        context.fillText(text, canvas.width / 2, canvas.height / 2);
        return canvas;
    }

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);

        cube.rotation.x -= 0.001;
        cube.rotation.y -= 0.001;
        cube.rotation.z -= 0.001;

    }
    animate();
});
