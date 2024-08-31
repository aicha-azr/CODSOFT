import { ChevronDown, CirclePlus, CircleUserRound, LogOut, StickyNote } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideBar = ({page}) => {
    const [menu, setMenu] = useState(false);
    const isCurrentPage = (pageName) => page === pageName;
    const nav = useNavigate();
    const handleNavigation = (path) => {
        console.log(`Navigating to ${path}`); // Debugging line
        nav(path);
    };
    return (
        <div className="fixed lg:h-screen h-fit right-0 left-0 lg:relative lg:grid lg:col-span-2 col-span-1 bg-white grid-rows-10 gap-8 shadow-r rounded-r-lg shadow-md row-start-0 row-span-1 col-span-10 z-30">
            <div className="font-bold lg:text-2xl text-xl row-span-2 border-b text-start self-center lg:pb-5 flex items-center justify-between lg:justify-center p-2 py-4 z-20">
                <h2 className="text-lg lg:text-2xl lg:text-center">TechBlog</h2>
                <ChevronDown 
                    className="lg:hidden  cursor-pointer z-20" 
                    onClick={() => setMenu(!menu)} 
                    aria-label="Toggle menu"
                />
            </div>

            <ol 
                className={`transition-transform duration-300 ease-in-out ${menu ? "transform translate-y-0" : "transform -translate-y-full hidden "} h-fit text-start flex lg:row-start-3 lg:translate-y-0 lg:flex flex-col gap-2 px-3 text-textPrimary py-5 z-0`}
            >
                <li className={`shadow-md p-2 flex items-center gap-2.5 rounded-2xl ${isCurrentPage('profile') ? 'bg-gray-200' : 'bg-altBackground'} font-medium cursor-pointer hover:bg-gray-200 hover:shadow-md`}>
                    <CircleUserRound size={30}/> Profile
                </li>
                <li className={`shadow-md p-2 flex items-center gap-2.5 rounded-2xl ${isCurrentPage('addPost') ? 'bg-gray-200' : 'bg-altBackground'} font-medium cursor-pointer hover:bg-gray-200 hover:shadow-md`}  onClick={() => handleNavigation('/newPost')}>
                    <CirclePlus size={30}/> Add post
                </li>
                <li className={`shadow-md p-2 flex items-center gap-2.5 rounded-2xl ${isCurrentPage('myPosts') ? 'bg-gray-200' : 'bg-altBackground'} font-medium cursor-pointer hover:bg-gray-200 hover:shadow-md`}>
                    <StickyNote size={30}/> My posts
                </li>
                <li className="shadow-md p-2 flex items-center gap-2.5 rounded-2xl bg-altBackground font-medium cursor-pointer hover:bg-gray-200 hover:shadow-md">
                    <LogOut size={30}/> Log out
                </li>
            </ol>
        </div>
    );
}

export default SideBar;
