import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeCube = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000); // Adjust aspect ratio
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(400, 400); // Smaller fixed size
    renderer.setClearColor(0x000000, 0); // Transparent background

    const mount = mountRef.current;
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="three-canvas-container"></div>;
};

export default ThreeCube;
