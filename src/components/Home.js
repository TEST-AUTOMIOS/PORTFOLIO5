import React from "react";
import "../styles_s/Home.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ modelPath, scale }) {
  const gltf = useGLTF(modelPath, true);

  return <primitive object={gltf.scene} />;
}

function Home() {
  const modelScale = [10, 10, 10]; // Adjust the scale as needed to make the model bigger

  return (
    <div className="container-fluid home">
      <div className="home-flex">
        <div className="home-content">
          <div className="home-head">
            <h1>
              We Build Digital <br />
              Experience
            </h1>
          </div>
          <br/>
          <br/>
          <div className="home-para">
            <p>
              We collaborate with smart and creative people to <br />
              build awesome WordPress Full Site Editing Themes.
            </p>
          </div>
          <br/>
          <br/>
          <div>
            <a href="/work">
              <button type="button" className="home-button">
                Explore
              </button>
            </a>
          </div>
        </div>


        {/* animation content */}
        <div className="home-canvas">
          <Canvas
            camera={{ position: [0, 0, 15], fov: 50, near: 0.1, far: 100 }}
          >
            <ambientLight intensity={1} />
            <OrbitControls />
            <Model modelPath="/need_some_space.glb" scale={modelScale} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Home;
