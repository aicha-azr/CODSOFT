import { ArrowLeft, CircleUser } from "lucide-react";
import SideBar from "../components/SideBar";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const nav = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const verifyCookie = async () => {
    try {
      if (!cookies.token) {
        nav("/signin");
      }
      const response = await axios.get("http://localhost:8080/api/user", {
        withCredentials: true,
      });
      console.log("Response:", response.data);
      setUserName(response.data.user.name);
      setEmail(response.data.user.email);
    } catch (error) {
      console.error("Error verifying cookie:", error);
      nav("/signin");
    }
  };

  useEffect(() => {
    // console.log(cookies.token);
    verifyCookie();
  }, []);
  const userNameMemo = useMemo(() => userName, [userName]);
  const emailMemo = useMemo(() => email, [email]);
  return (
    <>
      <div className="w-screen fixed top-0 right-0 left-0 overflow-y-auto scroll-smooth h-screen max-h-fit border border-blue-300 bg-altBackground flex flex-col font-sans grid grid-cols-10 gap-2 grid-rows-10">
        <SideBar page="profile" />
        <div className="h-screen max-h-fit lg:col-span-8 col-span-10 grid grid-rows-10 col-start-1 z-10">
        <div className="row-span-1 row-start-2 py-5 lg:row-start-1 flex justify-center items-center bg-shader-gradient relative border-b">
            <div className="absolute left-1 font-bold bg-white rounded-full p-1 shadow-light shadow-md text-textPrimary" onClick={() => nav('/home')}>
              <ArrowLeft />
            </div>
            <h2 className="text-center lg:text-2xl font-extrabold">Profile</h2>
          </div>
          <div className="row-span-9 row-start-3 lg:row-start-2 p-1 px-2 flex  gap-2 z-10 bg-gradient-to-r from-gray-100 to-gray-300">
            <div className="rounded-xl border shadow-xl flex flex-col items-center justify-center gap-5 h-fit lg:mt-10 bg-white bg-opacity-30 backdrop-blur-lg p-4 shadow-md font-sans w-fit">
              <div className="bg-altBackground rounded-full">
                <CircleUser size={80} />
              </div>
              <div>
                <div className="flex gap-4 items-center font-bold font-mono">
                  <label htmlFor="name" className="   min-w-1/2 text-start ">UserName</label>
                  <input
                    type="text"
                    name="name"
                    value={userNameMemo}
                    className="bg-transparent focus:outline-none p-1 text-lg"
                  />
                </div>
                <div className="flex gap-4 items-center font-semibold  font-mono">
                  <label htmlFor="email" className=" min-w-1/2 text-start ">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={emailMemo}
                    className="bg-transparent focus:outline-none p-1 text-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
