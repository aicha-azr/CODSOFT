import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { Editor, EditorState, RichUtils, AtomicBlockUtils, convertToRaw, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Toolbar from "../components/ToolBar";
import axios from "axios";
import { ArrowLeft, CircleUser, EllipsisVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Card from "../components/Card";

const MyPostsPage = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState(null);
  const nav = useNavigate();
  const [cookies] = useCookies(['token']);
  const [posts, setPosts] = useState([]);
  const [openMenu, setOpenMenu] = useState(null)
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
      const response = await axios.get('http://localhost:8080/api/myposts', {
        withCredentials: true,
      });
      console.log(response.data)
      setPosts(response.data.posts);
      } catch (e) {
        console.error("Error parsing JSON:", e);
      }
  
  };
  
  

  useEffect(() => {
    verifyCookie();
    fetchPostContent();
  }, [cookies.token, nav]); // Add dependencies to re-run effect on token change
// Function to extract the first image URL from the content JSON
const extractFirstImage = (content) => {
  try {
    const parsedContent = JSON.parse(content);
    const blocks = parsedContent.blocks || [];
    for (const block of blocks) {
      if (block.type === 'atomic') {
        const entityKey = block.entityRanges?.[0]?.key;
        const entity = parsedContent.entityMap[entityKey];
        if (entity?.type === 'IMAGE') {
          return entity.data.src;
        }
      }
    }
  } catch (error) {
    console.error('Error parsing content:', error);
  }
  return null;
};
  return (
    <>
      <div className="w-screen fixed top-0 right-0 left-0 overflow-y-auto scroll-smooth h-screen max-h-fit border border-blue-300 bg-altBackground flex flex-col font-sans grid grid-cols-10 gap-2 grid-rows-10">
        <SideBar page="myPosts" />
        <div className="h-screen max-h-fit lg:col-span-8 col-span-10 grid grid-rows-10 col-start-1 z-10">
          <div className="row-span-1 row-start-2 py-5 lg:row-start-1 flex justify-center items-center bg-shader-gradient relative border-b">
            <div className="absolute left-1 font-bold bg-white rounded-full p-1 shadow-light shadow-md text-textPrimary" onClick={() => nav('/home')}>
              <ArrowLeft />
            </div>
            <h2 className="text-center lg:text-2xl font-extrabold">My Posts</h2>
          </div>
          <div className="row-span-9 row-start-3 lg:row-start-2 flex flex-col gap-2 p-1 overflow-y-auto scroll-smooth z-10">
          {posts.length > 0 ? posts.map((item, index) => {
              const firstImage = extractFirstImage(item.content); // Extract the first image
              return (
                <div className="bg-white bg-gradient-to-r from-white to-gray-100 flex flex-col h-fit p-4 rounded-xl shadow-light shadow-lg gap-2 backdrop-grayscale-0 relative" key={item._id} onClick={()=>nav(`/posts/${item._id}`)}>
                  <div className="flex gap-2">
                    <div className="rounded-full bg-gray-200 flex items-center"><CircleUser size={20} /></div>
                    <div className="rounded-full self-center flex items-center">{item.author.name}</div>
                  </div>
                  <div className="w-full px-5 flex flex-col md:flex-row items-center gap-3 lg:gap-1.5 text-start">
                    <div className="h-fit w-full  rounded-full flex items-center"><h2 className="font-bold text-lg">{item.title}</h2></div>
                    <div className={`h-[12rem] w-full rounded-xl flex items-center justify-center ${firstImage ? '' : 'hidden'}`}>
                      {firstImage?(<img src={firstImage} alt={item.title} className="h-full w-full object-full " />):""}
                    </div>
                  </div>
                  <div className="absolute top-2 right-3  bg-gray-200 rounded-full p-1">
                  <EllipsisVertical />
                  </div>
                </div>
              );
            }) : (
              <>
                <Card />
                <Card />
                <Card />
              </>
            )}
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
    media = <img src={src} alt="" style={{ maxWidth: '30%' }} />;
  }

  return media;
};

export default MyPostsPage;
