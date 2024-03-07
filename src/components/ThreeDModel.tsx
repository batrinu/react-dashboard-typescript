// ThreeDModel.tsx
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "@react-three/drei";

const FBXModel = ({ modelPath }: { modelPath: string }) => {
  const fbx = useLoader(FBXLoader, modelPath); // Load your FBX file

  return <primitive object={fbx} scale={0.01} />; // Adjust scale as needed
};

const ThreeDModel = () => {
  // Path to your FBX file, adjust accordingly
  const modelPath = "/public/models/myModel.fbx";

  return (
    <div style={{ height: "500px", width: "500px" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <FBXModel modelPath={modelPath} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
