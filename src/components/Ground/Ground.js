import React, { useMemo } from 'react';
import { usePlane } from "use-cannon";
import * as THREE from 'three';
import { Reflector } from '@react-three/drei';

const Ground = () => {
    let marbleAlphaMap, marbleMap, marbleNormalMap, grassMap;
    const size = 4.6;

    const [ref] = usePlane(() => ({ 
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0.1, 22],
    }));




    grassMap = useMemo(() => new THREE.TextureLoader().load("assets/Textures/Grass/GrassGreenTexture0002.jpg"), []);
    grassMap.wrapS = THREE.RepeatWrapping;
    grassMap.wrapT = THREE.RepeatWrapping;
    grassMap.repeat.set(70, 70);

    return (
        <>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.3, 22]} >
                <planeBufferGeometry attach="geometry" args={[500, 500]} />
                <meshLambertMaterial attach="material">
                    <primitive attach="map" object={grassMap} />
                </meshLambertMaterial>
            </mesh>
            
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 22]} >
               
                    <planeBufferGeometry attach="geometry" args={[70, 75]}  />
               
            </mesh>


        </>
    );
}

export default Ground;