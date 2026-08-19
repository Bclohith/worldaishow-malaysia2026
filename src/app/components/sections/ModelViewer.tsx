"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Stage, OrbitControls, Html } from "@react-three/drei";
import { Suspense, useState, useEffect, useRef } from "react";
import * as THREE from "three";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);
  
  return <primitive object={scene} />;
}

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3 bg-[#050c1d]/90 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
        <div className="w-8 h-8 border-4 border-[#C0F43C]/20 border-t-[#C0F43C] rounded-full animate-spin" />
        <div className="text-white/60 text-sm font-mono tracking-widest uppercase whitespace-nowrap">Loading Model...</div>
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

export default function ModelViewer({ modelUrl }: { modelUrl: string }) {
  const [mounted, setMounted] = useState(false);
  const [fov, setFov] = useState(50);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    setMounted(true);
    
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  if (!mounted) return <div className="w-full h-full bg-[#050c1d] flex items-center justify-center border border-white/5 rounded-2xl" />;

  return (
    <div 
      ref={containerRef}
      className={`relative cursor-grab active:cursor-grabbing bg-[#050c1d] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all ${
        isFullscreen ? "fixed inset-0 w-screen h-screen z-[9999] rounded-none" : "w-full h-full rounded-2xl"
      }`}
    >
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 8, 15], fov: 50 }}>
        <Suspense fallback={<Loader />}>
          <CameraUpdater targetFov={fov} />
          
          {/* High-quality studio lighting & shadows */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 15, -5]} 
            intensity={1.2} 
            castShadow 
            shadow-mapSize={[2048, 2048]} 
            shadow-bias={-0.0001}
          />
          <directionalLight position={[-10, 10, 10]} intensity={0.5} />
          
          <Stage environment="city" intensity={0.2} adjustCamera={false}>
            <Model url={modelUrl} />
          </Stage>
          
          <OrbitControls 
            ref={controlsRef}
            makeDefault 
            autoRotate 
            autoRotateSpeed={0.5} 
            enablePan={true} 
            enableZoom={true} 
            dampingFactor={0.05}
            // CAMERA RESTRICTIONS:
            maxPolarAngle={Math.PI / 2 - 0.05} // Prevent going under the floor
            minDistance={3} // Prevent zooming too close and clipping
            maxDistance={35} // Prevent zooming too far out
          />
        </Suspense>
      </Canvas>

      {/* Bottom Center Pill */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 text-white/80 text-[13px] font-medium tracking-wide flex items-center gap-3 pointer-events-none shadow-lg whitespace-nowrap z-10">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#C0F43C] animate-pulse">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        </svg>
        Drag to explore 3D Model
      </div>

      {/* Bottom Right Controls (Sketchfab Style) */}
      <div className="absolute bottom-6 right-6 flex items-center gap-2 z-10">
        {/* Fullscreen Button */}
        <button
          onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 !text-white flex items-center justify-center hover:bg-[#C0F43C] hover:!text-black transition-all shadow-lg mr-2"
          aria-label="Toggle Fullscreen"
          title="Fullscreen"
        >
          {isFullscreen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
          )}
        </button>

        {/* Zoom In */}
        <button
          onClick={(e) => { e.stopPropagation(); setFov((prev) => Math.max(20, prev - 10)); }}
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 !text-white flex items-center justify-center hover:bg-[#C0F43C] hover:!text-black transition-all text-xl font-bold shadow-lg"
          aria-label="Zoom in"
          title="Zoom In"
        >
          +
        </button>
        {/* Reset Zoom & Camera */}
        <button
          onClick={(e) => { 
            e.stopPropagation(); 
            setFov(50); 
            controlsRef.current?.reset(); 
          }}
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 !text-white flex items-center justify-center hover:bg-[#C0F43C] hover:!text-black transition-all text-sm font-bold shadow-lg"
          aria-label="Reset zoom"
          title="Reset Zoom"
        >
          ⟲
        </button>
        {/* Zoom Out */}
        <button
          onClick={(e) => { e.stopPropagation(); setFov((prev) => Math.min(100, prev + 10)); }}
          className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 !text-white flex items-center justify-center hover:bg-[#C0F43C] hover:!text-black transition-all text-xl font-bold shadow-lg"
          aria-label="Zoom out"
          title="Zoom Out"
        >
          −
        </button>
      </div>
    </div>
  );
}
