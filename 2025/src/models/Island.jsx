import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { a } from '@react-spring/three';

import islandScene from '../assets/3d/lighthouse_at_portal_crossroads.glb';

const Island = (props) => {
  const islandRef = useRef();
  const { nodes, materials, animations } = useGLTF(islandScene);
  const { actions } = useAnimations(animations, islandRef);

  // Play animations (if available)
  useEffect(() => {
    if (actions && actions.someAnimationName) {
      actions.someAnimationName.play(); // Replace with your animation name
    }
  }, [actions]);

  return (
    <a.group ref={islandRef} {...props}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0, 0, 0]} // Adjust for testing
          rotation={[-Math.PI, 1.57, 0]}
        >
          <group
            name="e27d494cd76c4dd19426c7bf9852b6fafbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.1} // Adjust for testing
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="land" position={[0, 0, 0]} scale={1}>
                  <mesh
                    name="land_facade_1_0"
                    geometry={nodes.land_facade_1_0.geometry}
                    material={materials.facade_1}
                  />
                  <mesh
                    name="land_road_0"
                    geometry={nodes.land_road_0.geometry}
                    material={materials.road}
                  />
                  <mesh
                    name="land_wood_1_0"
                    geometry={nodes.land_wood_1_0.geometry}
                    material={materials.wood_1}
                  />
                  <mesh
                    name="land_metal_1_0"
                    geometry={nodes.land_metal_1_0.geometry}
                    material={materials.metal_1}
                  />
                  <mesh
                    name="land_light_1_0"
                    geometry={nodes.land_light_1_0.geometry}
                    material={materials.light_1}
                  />
                  <mesh
                    name="land_light_2_0"
                    geometry={nodes.land_light_2_0.geometry}
                    material={materials.light_2}
                  />
                  <mesh
                    name="land_wood_2_0"
                    geometry={nodes.land_wood_2_0.geometry}
                    material={materials.wood_2}
                  />
                  <mesh
                    name="land_ground_0"
                    geometry={nodes.land_ground_0.geometry}
                    material={materials.ground}
                  />
                  <mesh
                    name="land_stone_0"
                    geometry={nodes.land_stone_0.geometry}
                    material={materials.stone}
                  />
                  <mesh
                    name="land_rock_0"
                    geometry={nodes.land_rock_0.geometry}
                    material={materials.rock}
                  />
                  <mesh
                    name="land_glade_0"
                    geometry={nodes.land_glade_0.geometry}
                    material={materials.glade}
                  />
                  <mesh
                    name="land_dark_0"
                    geometry={nodes.land_dark_0.geometry}
                    material={materials.dark}
                  />
                  <mesh
                    name="land_roof_0"
                    geometry={nodes.land_roof_0.geometry}
                    material={materials.roof}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
};

export default Island;
