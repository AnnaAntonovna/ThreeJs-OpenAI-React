import React from 'react';
import { SketchPicker } from 'react-color';;
import { useSnapshot } from 'valtio';

import state from '../store';
import { color } from 'framer-motion';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}
        disableAlpha
        onChange={color => state.color = color.hex}
        presetColors={['#e64548', '#e07a36', '#efdb48', '#4dbd5a','#4799ba', '#1d4070']}
      />
    </div>
  )
}

export default ColorPicker