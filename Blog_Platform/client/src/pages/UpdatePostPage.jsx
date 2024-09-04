import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { Editor, EditorState, RichUtils, AtomicBlockUtils, convertToRaw, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import ToolBar from "../components/ToolBar";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PostPage = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState(null);
  const nav = useNavigate();
  const [cookies] = useCookies(['token']);
 const {id} = useParams();
 console.log(id);
  const verifyCookie = () => {
    if (!cookies.token) {
      nav('/signin');
    }
  };
const updateNotification = ()=> toast.success('post updated');
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

  const fetchPostContent = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/posts/${id}`, {
        withCredentials: true,
      });
      console.log(response)
      if (!response.data.post || !response.data.post.content) {
        console.warn("Post content is missing or empty");
        return; 
      }
      setTitle(response.data.post.title)
      const rawContent = response.data.post.content;
      let parsedContent;
  
      try {
        parsedContent = JSON.parse(rawContent);
      } catch (e) {
        console.error("Error parsing JSON:", e);
        return; 
      }
  
      const contentState = convertFromRaw(parsedContent);
      setEditorState(EditorState.createWithContent(contentState));
    } catch (error) {
      console.error("Error fetching post content:", error);
    }
  };
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
  const UpdatePost = async()=>{
    const postData = {
      content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
      title: title,
    };
    try{

      const response = await axios.put(`http://localhost:8080/api/posts/${id}`, postData, {
        withCredentials: true, 
      });
      console.log(response.data);
      updateNotification();
    }catch(e){
      console.log('error:',e)
    }
  }

  useEffect(() => {
    verifyCookie();
    fetchPostContent();
  }, [cookies.token, nav]);

  return (
    <>
      <div className="w-screen fixed top-0 right-0 left-0 overflow-y-auto scroll-smooth h-screen max-h-fit border border-blue-300 bg-altBackground flex flex-col font-sans grid grid-cols-10 gap-2 grid-rows-10">
        <SideBar page="myPosts" />
        <div className="h-screen max-h-fit lg:col-span-8 col-span-10 grid grid-rows-10 col-start-1 z-10 relative w-full">
          <div className="row-span-1 row-start-2 py-5 lg:row-start-1 flex justify-start items-center bg-shader-gradient relative border-b w-full">
           <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="focus:outline-none bg-transparent font-bold w-full lg:text-2xl" />
           
          </div>
         
          <div className="row-span-1 row-start-4 lg:row-start-2 p-1 px-2 flex items-center gap-2 bg-shader-gradient z-20">
            <ToolBar editorState={editorState} setEditorState={setEditorState} addImage={handleImageUpload} />
          </div>

          <div className="row-span-8 row-start-3 lg:row-start-3 flex flex-col gap-2 p-1 overflow-y-auto scroll-smooth z-10">
            <Editor
              editorState={editorState}
              onChange={setEditorState}
              handleKeyCommand={handleKeyCommand}
              blockRendererFn={blockRendererFn}
              blockStyleFn={blockStyleFn}
              placeholder="Write something..."
              
            />
          </div>
          <button  className="absolute right-0 bottom-0 w-full p-2 mb-1 mx-1 bg-blue-500 text-white rounded z-20" onClick={UpdatePost}>Update Post</button>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

// Media component to handle atomic blocks
const Media = (props) => {
  const entity = props.contentState.getEntity(props.block.getEntityAt(0));
  const { src } = entity.getData();
  const type = entity.getType();

  let media;
  if (type === 'IMAGE') {
    media = <img src={src} alt="" className="w-full h-40  lg:h-[20rem] object-fill"  />;
  }

  return media;
};

export default PostPage;
