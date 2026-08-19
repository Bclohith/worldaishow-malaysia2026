"use client";

import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { Suspense, useEffect, useState } from "react";

function SphereBackground({ imageUrl }: { imageUrl: string }) {
  const texture = useLoader(THREE.TextureLoader, imageUrl);
  
  useEffect(() => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
  }, [texture]);

  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-4 border-cyan/20 border-t-cyan rounded-full animate-spin" />
        <div className="text-white/60 text-sm font-mono tracking-widest uppercase whitespace-nowrap">Loading 360°...</div>
      </div>
    </Html>
  );
}

function CameraUpdater({ targetFov }: { targetFov: number }) {
  const { camera } = useThree();
  useFrame(() => {
    if (camera.type === 'PerspectiveCamera') {
      const pc = camera as THREE.PerspectiveCamera;
      pc.fov = THREE.MathUtils.lerp(pc.fov, targetFov, 0.1);
      pc.updateProjectionMatrix();
    }
  });
  return null;
}

export default function PanoramaViewer({ imageUrl }: { imageUrl: string }) {
  const [mounted, setMounted] = useState(false);
  const [fov, setFov] = useState(75);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    // Zoom in (scroll up) or out (scroll down)
    const delta = e.deltaY > 0 ? 5 : -5;
    setFov((prev) => Math.max(30, Math.min(110, prev + delta)));
  };

  if (!mounted) return <div className="w-full h-full bg-[#050c1d] flex items-center justify-center border border-white/5 rounded-2xl" />;

  return (
    <div 
      className="w-full h-full relative cursor-grab active:cursor-grabbing bg-[#050c1d] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
      onWheel={handleWheel}
    >
      <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
        <Suspense fallback={<Loader />}>
          <CameraUpdater targetFov={fov} />
          <SphereBackground imageUrl={imageUrl} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
      
      {/* 360 Label */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 text-white/80 text-[13px] font-medium tracking-wide flex items-center gap-3 pointer-events-none shadow-lg whitespace-nowrap">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan">
          <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M19 9l3 3-3 3M9 19l3 3 3-3M2 12h20M12 2v20"/>
        </svg>
        Drag to explore 360°
      </div>

      {/* Zoom Controls */}
      <div className="absolute bottom-6 right-6 flex gap-2 z-10">
        <button
          onClick={(e) => { e.stopPropagation(); setFov((prev) => Math.max(30, prev - 15)); }}
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 !text-white flex items-center justify-center hover:bg-[#C0F43C] hover:!text-black transition-all text-xl font-bold shadow-lg"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); setFov(75); }}
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 !text-white flex items-center justify-center hover:bg-[#C0F43C] hover:!text-black transition-all text-sm font-bold shadow-lg"
          aria-label="Reset zoom"
        >
          ⟲
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); setFov((prev) => Math.min(110, prev + 15)); }}
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 !text-white flex items-center justify-center hover:bg-[#C0F43C] hover:!text-black transition-all text-xl font-bold shadow-lg"
          aria-label="Zoom out"
        >
          −
        </button>
      </div>
    </div>
  );
}
