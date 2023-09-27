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
import { motion } from "framer-motion";

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
        <motion.Col
          lg="6"
          md="12"
          sm="12"
          xs="12"
          className="home-content"
          {...slideAnimation("left")}
        >
          <h1 className="home-head" ref={textItem}>
            We Build Digital <br />
            Experience
          </h1>

          <br />

          <p className="home-para">
            We collaborate with smart and creative people to <br />
            build awesome WordPress Full Site Editing Themes.
          </p>

          <br />
          <div>
            <a href="/work">
              <button type="button" className="home-button">
                Explore
              </button>
            </a>
          </div>
        </motion.Col>
        <Col lg="6" md="12" sm="12" xs="12" className="home-anime">
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
        </Col>
      </Row>
    </Container>
  );
}

export const transition = { type: "spring", duration: 1 };
export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -300 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

export default Home;
