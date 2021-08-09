import React from 'react';
import SpotLight from '../SpotLight/Spotlight';
import PointLight from '../PointLight/PointLight';
import DirectionalLight from '../DirectionalLight/DirectionalLight';
import Spotlight from '../SpotLight/Spotlight';



const Lights = () => {

    return (
        <>
        <ambientLight intensity={ 0.07 }/>
        
        <DirectionalLight
            position={[29, 50, -60]}
            target={[-5, -3, 50]}
            intensity={0.2}
            color={ "skyblue" }
            shadowCamBot={-30}
            shadowCamTop={30}
            shadowCamL={53}
            shadowCamR={-53}                
        />   
        <Spotlight
            position={[0, 80, -120]}
            target={[80, 150, -200]}
            intensity={0.5}
            penumbra={0.5}                
            sNormalBias={0}
            sBias={0}
            angle={-Math.PI}
            decay={2}               
        />  

        <PointLight 
            intensity={0.6} 
            position={[0, 19, 13]}
        /> 
                        
            
       
    </>
    )

}

export default Lights;