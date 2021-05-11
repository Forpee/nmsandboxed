import React from 'react';

import PointLight from '../PointLight/PointLight';
import DirectionalLight from '../DirectionalLight/DirectionalLight';


const Lights = ({ night, performance }) => {

    return (
        <>
            <ambientLight intensity={0.2}/>
            {/* moon/sunlight */}
            <DirectionalLight
                position={[29, 50, -60]}
                target={[-5, -3, 50]}
                intensity={0.3}
                color={"lightgoldenrodyellow"}
                shadowCamBot={-30}
                shadowCamTop={30}
                shadowCamL={53}
                shadowCamR={-53}                
            />   
            {/* moon light */}
         

            <PointLight 
                intensity={0.6} 
                position={[0, 19, 13]}
            /> 


        </>
    )

}

export default Lights;