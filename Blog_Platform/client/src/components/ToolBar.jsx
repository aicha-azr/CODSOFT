import React from 'react';
import { AlignCenter, AlignLeft, AlignRight, Bold, Heading2, Image, Italic, Underline } from 'lucide-react';
import { RichUtils } from 'draft-js';

const ToolBar = ({ editorState, setEditorState, addImage }) => {
  const handleToggle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };
  const handleBlockTypeToggle = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };
  return (
    <div className="border-b  flex gap-5  py-1 w-full h-fit bg-[#ddd] px-1">
      <button onClick={() => handleBlockTypeToggle('header-two')} className='focus:outline-none p-0 bg-transparent'>
      <Heading2 />
      </button>
      <button className='focus:outline-none p-0 bg-transparent' onClick={() => handleToggle('BOLD')}>
      <Bold />
      </button>
      <button className='focus:outline-none p-0 bg-transparent' onClick={() => handleToggle('ITALIC')}>
      <Italic />
      </button>
      <button className='focus:outline-none p-0 bg-transparent' onClick={() => handleToggle('UNDERLINE')}>
      <Underline />
      </button>
     
      <button className='focus:outline-none p-0 bg-transparent'>
        <input 
          type="file" 
          multiple 
          onChange={addImage} 
          className="hidden"
          id="imageUpload"
        />
        <label htmlFor="imageUpload" className="cursor-pointer">
          <Image />
        </label>
      </button>
    </div>
  );
};

export default ToolBar;
