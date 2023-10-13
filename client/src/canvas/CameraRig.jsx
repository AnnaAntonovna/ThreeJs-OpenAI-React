import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import state from '../store';

const CameraRig = ({children}) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) =>{
    const isBreakPoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;
    const isMiniMobile = window.innerWidth <= 400;
    //set initial position of the model
    let targetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      if(isBreakPoint) targetPosition = [0, 0.15, 2.3];
      if(isMobile) targetPosition = [0, 0.3, 3];
      if(isMiniMobile) targetPosition = [0, 0.65, 4.6];
    } else {
      if(isMobile) targetPosition = [0, 0.2, 2.5];
      if(isMiniMobile) targetPosition = [-0.04, -0.04, 3];
      else targetPosition = [0, 0, 2]
    }

    //set model camera position

    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    easing.dampE(
      group.current.rotation, 
      [state.pointer.y /10, -state.pointer.x /5, 0], 
      0.25,
      delta
    )
  })
  
  return (
    <group ref={group}>
      {children}
    </group>
  )
}

export default CameraRig