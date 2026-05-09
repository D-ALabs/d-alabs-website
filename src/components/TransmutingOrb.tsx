"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

const GOLD = new THREE.Color("#d4af37");
const GOLD_LIGHT = new THREE.Color("#e8c958");
const MERCURY = new THREE.Color("#c8c8d0");

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);
  const tmpColor = useRef(new THREE.Color());

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.12;
      meshRef.current.rotation.x = Math.sin(t * 0.18) * 0.18;
    }
    if (matRef.current) {
      // Slow oscillation between gold and mercury
      const phase = (Math.sin(t * 0.35) + 1) / 2; // 0..1
      // Two-stop blend with a midpoint that warms toward gold-light
      if (phase < 0.5) {
        tmpColor.current.lerpColors(GOLD, GOLD_LIGHT, phase * 2);
      } else {
        tmpColor.current.lerpColors(GOLD_LIGHT, MERCURY, (phase - 0.5) * 2);
      }
      matRef.current.color.copy(tmpColor.current);

      // Roughness breathes a bit
      matRef.current.roughness = 0.15 + Math.sin(t * 0.5) * 0.05;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.15}>
      <mesh ref={meshRef} scale={1.25}>
        <icosahedronGeometry args={[1, 64]} />
        <meshStandardMaterial
          ref={matRef}
          color={GOLD}
          metalness={1}
          roughness={0.18}
          envMapIntensity={1.4}
        />
      </mesh>
    </Float>
  );
}

function OrbFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-2/3 aspect-square rounded-full animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, var(--primary-light) 0%, var(--primary) 35%, var(--primary-dark) 70%, transparent 100%)",
          filter: "blur(2px)",
        }}
      />
    </div>
  );
}

export default function TransmutingOrb() {
  const [mounted, setMounted] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    setMounted(true);
  }, []);

  if (!mounted || reduce) {
    return <OrbFallback />;
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 40 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 3, 4]} intensity={1.6} color="#fff4d6" />
      <directionalLight position={[-3, -1, 2]} intensity={0.5} color="#c8c8e0" />
      <pointLight position={[0, 0, 3]} intensity={0.4} color="#ffffff" />
      <Environment preset="studio" />
      <Orb />
    </Canvas>
  );
}
