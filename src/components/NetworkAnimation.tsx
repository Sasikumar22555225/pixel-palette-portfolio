import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Points, PointMaterial, Text } from "@react-three/drei";
import * as THREE from "three";

function GlobeNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const radius = 5;
  const nodeCount = 500;

  // Generate globe nodes
  const nodes = useMemo(() => {
    const temp: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      temp.push(new THREE.Vector3(x, y, z));
    }
    return temp;
  }, [nodeCount]);

  // Convert nodes to Float32Array
  const positions = useMemo(() => {
    const arr = new Float32Array(nodes.length * 3);
    nodes.forEach((n, i) => {
      arr[i * 3] = n.x;
      arr[i * 3 + 1] = n.y;
      arr[i * 3 + 2] = n.z;
    });
    return arr;
  }, [nodes]);

  // Connecting lines
  const lines = useMemo(() => {
    const temp: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = nodes[i].distanceTo(nodes[j]);
        if (d < 1.5 && Math.random() > 0.75) {
          temp.push([nodes[i], nodes[j]]);
        }
      }
    }
    return temp;
  }, [nodes]);

  const lineColors = useMemo(
    () => lines.map(() => new THREE.Color("#38bdf8")),
    [lines]
  );

  // Globe rotation and line glow
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }

    const glow = Math.sin(state.clock.elapsedTime * 1.5) * 0.5 + 0.5;
    lineColors.forEach((c) => c.setHSL(0.55, 1, 0.4 + glow * 0.25));
  });

  return (
    <group ref={groupRef}>
      {/* Glowing nodes */}
      <Points positions={positions}>
        <PointMaterial
          transparent
          color="#38bdf8"
          size={0.08}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>

      {/* Connection lines */}
      {lines.map((line, i) => (
        <Line
          key={i}
          points={line}
          color={lineColors[i]}
          lineWidth={0.3}
          transparent
          opacity={0.35}
        />
      ))}

      {/* Floating labeled particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <MovingLabeledParticle key={i} radius={radius} />
      ))}
    </group>
  );
}

// Floating particle with responsive text
function MovingLabeledParticle({ radius }: { radius: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const textRef = useRef<any>(null);
  const speed = useMemo(() => 0.15 + Math.random() * 0.25, []);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);
  const labels = ["HTTPS", "TCP/IP", "DNS", "Embedded Linux", "DHCP ", "Switch", "Packet", "SSL", "Router", "Ping"];
  const label = useMemo(() => labels[Math.floor(Math.random() * labels.length)], []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = radius * Math.cos(t) * Math.sin(t * 0.7);
    const y = radius * Math.sin(t * 0.6);
    const z = radius * Math.cos(t * 0.4);
    if (ref.current) ref.current.position.set(x, y, z);
    if (textRef.current) {
      textRef.current.position.set(x * 1.05, y * 1.05, z * 1.05);
      textRef.current.lookAt(0, 0, 15);
    }
  });

  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshBasicMaterial color="#00ffcc" />
      </mesh>
      <Text
        ref={textRef}
        fontSize={0.25}
        color="#00e6ff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.015}
        outlineColor="#001f3f"
      >
        {label}
      </Text>
    </group>
  );
}

const NetworkAnimation = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh", // Full viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", // Centers the globe vertically
        overflow: "hidden",
        background: "transparent",
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 18],
          fov: 45,
        }}
        style={{
          width: "100vw",
          height: "80vh",
          background: "transparent",
        }}
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <GlobeNetwork />
      </Canvas>
    </div>
  );
};

export default NetworkAnimation;
