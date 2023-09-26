import React, { useEffect, useRef } from "react";
import "../styles_s/Home.css";
import { Canvas } from "@react-three/fiber";
import {
  MeshReflectorMaterial,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import gsap from "gsap";
import { Col, Container, Row } from "reactstrap";

function Model({ modelPath, scale }) {
  const gltf = useGLTF(modelPath, true);
  return <primitive object={gltf.scene} />;
}

function Home() {
  const textItem = useRef(null);
  const ModelItem = useRef(null);
  console.log(ModelItem);

  useEffect(() => {
    console.log("Component mounted");
    if (textItem.current) {
      gsap.from(textItem.current, {
        x: 2,
        y: 3,
        opacity: 1,
        duration: 10,
      });
    }
  }, []);

  const modelScale = [10, 10, 10];

  return (
    <Container
      fluid
      className="home d-flex justify-content-center align-items-center text-center"
    >
      <Row>
        <Col lg="6" md="12" sm="12" xs="12">
          <div className="home-content">
            <h1 className="home-head" ref={textItem}>
              We Build Digital <br />
              Experience
            </h1>

            <br />

            <div className="text-container">
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
        </Col>
        <Col lg="6" md="12" sm="12" xs="12">
          <div className="home-canvas ">
            <Canvas
              camera={{ position: [0, 0, 15], fov: 50, near: 0.1, far: 100 }}
            >
              <ambientLight intensity={1} />
              <OrbitControls />
              <Model modelPath="/need_some_space.glb" scale={modelScale} />
              <mesh ref={ModelItem}>
                <boxGeometry />
                <meshBasicMaterial />
              </mesh>
            </Canvas>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
