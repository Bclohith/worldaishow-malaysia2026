"use client";

import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("./ModelViewer"), { ssr: false });

export function ModelViewerSection() {
  return (
    <section className="relative py-20 bg-[#020b1c] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight font-space-grotesk">
            Interactive <span className="text-[#C0F43C]">3D Floorplan</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Explore the World AI Show Malaysia 2026 venue in full 3D.
          </p>
        </div>
        <div className="w-full aspect-video min-h-[500px] max-h-[750px] relative max-w-5xl mx-auto">
          <ModelViewer modelUrl="/malaysia/models/floorplan-draco.glb" />
        </div>
      </div>
    </section>
  );
}
