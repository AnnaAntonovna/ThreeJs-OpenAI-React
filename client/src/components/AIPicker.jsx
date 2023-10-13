import React from 'react';

import CustomButton from './CustomButton';

const AIPicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => 
{
  return (
    <div className='aipicker-container'>
      <textarea 
      placeholder='Ask AI for an image...'
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      className='aipicker-textarea'
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
            <CustomButton 
              type="outline"
              title="AI is working..."
              customStyles='text-xs'
            />
            ):(
            <>
              <CustomButton 
              type="outline"
              title="Generated Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles='text-xs font-bold'
              />
              <CustomButton 
              type="filled"
              title="Generated Texture"
              handleClick={() => handleSubmit('full')}
              customStyles='text-xs font-bold'
              />
            </>


        )}
      </div>
    </div>
  )
}

export default AIPicker