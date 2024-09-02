import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { Editor, EditorState, RichUtils, AtomicBlockUtils, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Toolbar from "../components/ToolBar";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NewPostPage = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState(null);
  const nav = useNavigate();
  const [cookies, removeCookie] = useCookies(['token']);
const verifyCookie = () => {
 
    if(!cookies.token){
      nav('/signin')
    }
};
const notifySuccess = (message) => toast.success(message)

useEffect(() => {
// console.log(cookies.token);
  verifyCookie();
}, []);
  // Function to handle image upload from local file system
  const handleImageUpload = async (event) => {
    const files = Array.from(event.target.files);
    const uploadedImages = await Promise.all(files.map(file => uploadImageToServer(file)));

    uploadedImages.forEach(url => {
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', { src: url });
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
      setEditorState(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '));
    });
  };

  const blockRendererFn = (contentBlock) => {
    const type = contentBlock.getType();
    if (type === 'atomic') {
      return {
        component: Media,
        editable: false,
      };
    }
    return null;
  };
  const BlockRenderer = (props) => {
    const { block } = props;
    const type = block.getType();
    
    if (type === 'header-two') {
      return <h2 className="text-2xl font-semibold">{props.children}</h2>;
    }
  
    return <div className={blockStyleFn(block)}>{props.children}</div>;
  };
  
  const Media = (props) => {
    const entity = props.contentState.getEntity(props.block.getEntityAt(0));
    const { src } = entity.getData();
    const type = entity.getType();
  
    let media;
    if (type === 'IMAGE') {
      media = <img src={src} alt="" style={{ maxWidth: '30%' }} />;
    }
  
    return media;
  };
  // Function to handle text editor commands
  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };
  const blockStyleFn = (block) => {
    const type = block.getType();
    if (type === 'header-two') {
      return 'text-2xl font-semibold';
    }
    return null;
  };
  

  // Function to upload images to Cloudinary
  const uploadImageToServer = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET); // Ensure this is correct
    formData.append('cloud_name', import.meta.env.VITE_CLOUD_NAME);
    try {
      const response = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, formData);
      return response.data.secure_url; 
    } catch (error) {
      console.error("Error uploading image to server", error);
    }
  };

  // Function to handle the submission of the post with images and text
  const handleSubmit = async () => {
    const postData = {
      content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
      title: title,
    };
console.log(JSON.stringify(convertToRaw(editorState.getCurrentContent())))
    try {
      await axios.post('http://localhost:8080/api/posts', postData, {
        withCredentials: true, 
      });
      alert('Post submitted successfully');
      notifySuccess('Post submitted successfully');
    } catch (error) {
      console.error("Error submitting post", error);
    }
  };

  return (
    <>
      <div className="w-screen fixed top-0 right-0 left-0 overflow-y-auto scroll-smooth h-screen max-h-fit border border-blue-300 bg-altBackground flex flex-col font-sans grid grid-cols-10 gap-2 grid-rows-10">
        <SideBar page="addPost" />
        <div className="h-screen max-h-fit lg:col-span-8 col-span-10 grid grid-rows-10 col-start-1 z-10 relative">
        <div className="row-span-1 row-start-2 py-5 lg:row-start-1 flex justify-center items-center bg-shader-gradient relative border-b">
            <div className="absolute left-1 font-bold bg-white rounded-full p-1 shadow-light shadow-md text-textPrimary" onClick={() => nav('/home')}>
              <ArrowLeft />
            </div>
            <h2 className="text-center lg:text-2xl font-extrabold">Add new post</h2>
          </div>
          <div className="row-span-1 row-start-3 lg:row-start-2 p-1 px-2 flex  items-center gap-2 bg-shader-gradient z-10 border-b">
            <label htmlFor="title" className="font-bold">Title:</label>
            <input type="text" name="title" placeholder="write a title for your post..." className="bg-transparent p-2 focus:outline-none w-full" onChange={(e)=>setTitle(e.target.value)}/>
          </div>

          <div className="row-span-1 row-start-4 lg:row-start-3 p-1 px-2 flex items-center gap-2 bg-shader-gradient z-20">
            <Toolbar editorState={editorState} setEditorState={setEditorState} addImage={handleImageUpload} />
          </div>
          <div className="lg:row-span-6 row-span-5 row-start-5 lg:row-start-4 flex flex-col gap-2 p-1 overflow-y-auto scroll-smooth z-10">
            <Editor
              editorState={editorState}
              onChange={setEditorState}
              handleKeyCommand={handleKeyCommand}
              blockRendererFn={blockRendererFn}
              blockStyleFn={blockStyleFn} 
              placeholder="Write something..."
            />

          </div>
          <button onClick={handleSubmit} className="absolute right-0 bottom-0 w-full p-2 mb-1 mx-1 bg-blue-500 text-white rounded z-20">Submit Post</button>

        </div>
      </div>
    <ToastContainer position="top-center" transition={Bounce}/>
    </>
  );
};

export default NewPostPage;
