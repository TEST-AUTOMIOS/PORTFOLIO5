import React, { useEffect, useRef } from "react";
import "../styles_s/Home.css"
import { Canvas } from "@react-three/fiber";
import { MeshReflectorMaterial, OrbitControls, useGLTF } from "@react-three/drei";
import gsap from "gsap";

function Model({ modelPath, scale }) {
  const gltf = useGLTF(modelPath, true);
  return <primitive object={gltf.scene} />;
}

function Home() {
  const textItem = useRef(null);
  const ModelItem=useRef(null);
  console.log(ModelItem)

  useEffect(() => {
    console.log("Component mounted");
    if (textItem.current) {
      gsap.from(textItem.current, {
        x: 2,
        y:3,
        opacity:1,
        duration:10
      });
    }

  }, []);

  const modelScale = [10, 10, 10];

  return (
    <div className="container-fluid home">
      <div className="home-content">
        <div className="home-head">
          <h1 className="main-text" ref={textItem}>
            We Build Digital <br />
            Experience
          </h1>
        </div>
        <br />
        <br />
        <div className="home-para">
          <p>
            We collaborate with smart and creative people to <br />
            build awesome WordPress Full Site Editing Themes.
          </p>
        </div>
        <br />
        <br />
        <div>
          <a href="/work">
            <button type="button" className="home-button">
              Explore
            </button>
          </a>
        </div>
      </div>
      <div className="home-canvas">
        <Canvas
          camera={{ position: [0, 0, 15], fov: 50, near: 0.1, far: 100 }}
          
        >
          <ambientLight intensity={1} />
          <OrbitControls />
          <Model modelPath="/need_some_space.glb" scale={modelScale} />
          <mesh ref={ModelItem}>
            <boxGeometry/>
            <meshBasicMaterial/>
            
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}

export default Home;
