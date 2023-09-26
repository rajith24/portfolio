import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls correctly
// import GLBModel from './glbmodel';
import glbModel from './programmer.glb';
import { Html } from '@react-three/drei';
import CustomComponent from './customComponent';


// Define a component for your GLB model
const GLBModel = () => {
  const modelRef = useRef();

  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    // Load the GLB model using GLTFLoader
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(glbModel, (gltf) => {
      const model = gltf.scene;
      modelRef.current = model;
      setModelLoaded(true); // Set the modelLoaded state to true when loading is complete
    });
  }, []);

  return (
    <group>
      {modelLoaded && <primitive object={modelRef.current} />}
    </group>
  );
};
// Define the main React component
const ProgrammerModel = () => {
  const controls = useRef();

  return (
    <React.Fragment>
      {/* <div className="canvas-container"> */}
      <Canvas camera={{ position: [8, 0, 0], rotation: [0, 0, 0], fov: 25 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.8} position={[10, 15, 10]} angle={0.2} />
        <GLBModel />
        <OrbitControls
          ref={controls}
          autoRotate
          autoRotateSpeed={0.3}
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />

        {/* Add your custom component inside the canvas */}
        {/* <Html className="outerMainDiv">
          <CustomComponent />
        </Html> */}
        

      </Canvas>
      {/* <div className="gradient-div"></div>
      </div> */}
    </React.Fragment>


  );
};

export default ProgrammerModel;
