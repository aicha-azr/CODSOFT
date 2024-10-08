import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { Editor, EditorState, RichUtils, AtomicBlockUtils, convertToRaw, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Toolbar from "../components/ToolBar";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

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
  const updatePost = async()=>{
    try{
      const response = await axios.put(`http://localhost:8080/api/posts/${id}`)
    }catch(e){
      console.log('error:', e)
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
        <div className="h-screen max-h-fit lg:col-span-8 col-span-10 grid grid-rows-10 col-start-1 z-10">
          <div className="row-span-1 row-start-2 py-5 lg:row-start-1 flex justify-start items-center bg-shader-gradient relative border-b">
           
            <h2 className="text-center lg:text-2xl font-extrabold ">{title}</h2>
          </div>
         


          <div className="row-span-8 row-start-3 lg:row-start-2 flex flex-col gap-2 p-1 overflow-y-auto scroll-smooth z-10">
            <Editor
              editorState={editorState}
              onChange={setEditorState}
              handleKeyCommand={handleKeyCommand}
              blockRendererFn={blockRendererFn}
              blockStyleFn={blockStyleFn}
              placeholder="Write something..."
              readOnly={true} // Make the editor read-only
            />
          </div>
        </div>
      </div>
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
