import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const getThemeColor = () => {
  if (typeof window === 'undefined') return { r: 200, g: 200, b: 200 };
  const root = getComputedStyle(document.documentElement);
  const rgbText = root.getPropertyValue('--rgbText') || '255 255 255';
  const [r, g, b] = rgbText
    .trim()
    .split(/\s+/)
    .map(Number);
  return { r: Number.isNaN(r) ? 200 : r, g: Number.isNaN(g) ? 200 : g, b: Number.isNaN(b) ? 200 : b };
};

export const DottedSurface = ({ className, style }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return;

    const SEPARATION = 150;
    const AMOUNTX = 32;
    const AMOUNTY = 48;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xffffff, 2000, 8000);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 320, 1050);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(scene.fog.color, 0);
    containerRef.current.appendChild(renderer.domElement);

    const positions = [];
    const colors = [];
    const { r, g, b } = getThemeColor();

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        const y = 0;
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
        positions.push(x, y, z);
        colors.push(r, g, b);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 8,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let count = 0;
    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const positionAttribute = geometry.attributes.position;
      const posArray = positionAttribute.array;

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const idx = i * 3;
          posArray[idx + 1] =
            Math.sin((ix + count) * 0.28) * 40 + Math.sin((iy + count) * 0.42) * 40;
          i++;
        }
      }
      positionAttribute.needsUpdate = true;

      renderer.render(scene, camera);
      count += 0.08;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    sceneRef.current = { scene, camera, renderer, points, animationId };

    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current?.animationId) cancelAnimationFrame(sceneRef.current.animationId);
      if (sceneRef.current?.points) {
        sceneRef.current.points.geometry.dispose();
        sceneRef.current.points.material.dispose();
      }
      renderer.dispose();
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={className} style={style} aria-hidden />;
};
