import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene = ({ className }: ThreeSceneProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });

    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.02,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Create floating geometric shapes
    const shapes: THREE.Mesh[] = [];
    
    // Torus
    const torusGeometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-3, 2, -2);
    scene.add(torus);
    shapes.push(torus);

    // Icosahedron
    const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);
    const icosahedronMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x9933ff,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
    icosahedron.position.set(3, -1, -1);
    scene.add(icosahedron);
    shapes.push(icosahedron);

    // Octahedron
    const octahedronGeometry = new THREE.OctahedronGeometry(1, 0);
    const octahedronMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff3399,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial);
    octahedron.position.set(0, -2, -3);
    scene.add(octahedron);
    shapes.push(octahedron);

    // Position camera
    camera.position.z = 5;

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Subtle camera movement
      camera.position.x = mouse.x * 0.5;
      camera.position.y = mouse.y * 0.5;
      camera.lookAt(0, 0, 0);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Rotate particles
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0005;

      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.01 * (index + 1);
        shape.rotation.y += 0.01 * (index + 1);
        
        // Floating animation
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.005;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={className} />;
};

export default ThreeScene;