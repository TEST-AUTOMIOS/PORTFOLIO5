import React, { useEffect, useRef, useState } from "react";
import "../styles_s/Home.css";
import * as THREE from 'three';
import bg2 from "../images/road.png";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Home() {
  const canvasRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer();
    const canvas = canvasRef.current;
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvas.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
    camera.position.z = 5;

   const loader=new THREE.TextureLoader();

    const planeG = new THREE.PlaneGeometry(6, 6, 25, 5);
    const planeM = new THREE.MeshBasicMaterial({
      color:"transparent",
        map: loader.load(bg2),
        side:THREE.DoubleSide
    });
    const plane = new THREE.Mesh(planeG, planeM);
    scene.add(plane);
    const controls = new OrbitControls(camera, renderer.domElement);

    scene.add(controls);
    controls.autoRotate=true

    const particleGeometry = new THREE.BufferGeometry();
    const count = 30000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial()
    particleMaterial.size = 0.01;
    particleMaterial.sizeAttenuation = true;

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);
 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  return (
    <div className="container-fluid home">
      <div className="three-container" id="canvas" ref={canvasRef}></div>
      <div className="ui-elements">
      <div className="col-lg-12 col-md-12">
        <div className="row">
          <h1 className="home-text">
            We <span className="home-span"> Build</span> Digital <br />
            Experience
          </h1>
          <br />
          &nbsp;
          <p className="home-para">
            We collaborate with <strong>smart</strong> and{" "}
            <strong>creative</strong> people to <br /> build awesome{" "}
            <strong>WordPress</strong> Full Site Editing Themes.
          </p>
          &nbsp;
          <br />
          <a href="/about"><button type="button" className="home-button">Get Started</button></a>
        </div>
      </div>
      {/* <hr /> */}
    </div>
    </div>
  );
}

export default Home;
