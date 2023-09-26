import React, { useRef, useEffect, useState } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

// Import your GLB model (replace with your model's path)
import glbModel from './programmer.glb';

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

export default GLBModel;
