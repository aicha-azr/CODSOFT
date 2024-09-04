import { useState } from 'react';
import logo from '../assets/logo.png';
import Cv from '../assets/aicha_azeroual.pdf';
import myLogo from '../assets/myLogo.ico'
const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    
<nav className="bg-opacity-60 bg-pink2  md:rounded-full mt-1   sm:px-4 py-2 rounded shadow fixed top-1  md:w-fit z-20 rounded  shadow-md w-full flex justify-center self-center rounded-bl-sm rounded-br-2xl rounded-tl-2xl rounded-tr-sm px-1" >
  <div className="container md:flex md:flex-row md:flex-wrap justify-between items-center lg:gap-20 md:gap-5 flex flex-col  ">
    <div className='flex justify-between  w-full md:w-fit'>
    <div href="/" className="flex items-center">
     {/* <span className="font-greatVibes self-center text-xl font-semibold font-lugrasimo whitespace-nowrap text-bleuGreen px-1">
        Aicha Azeroual
      </span>*/}
      <img src={myLogo} alt="logo" className='w-8 h-8' />
    </div>

    <div className="flex items-center">
      <button
        id="menu-toggle"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-bleuGreen 
        rounded-bl-sm rounded-br-2xl rounded-tl-2xl rounded-tr-sm  bg-yellow  focus:outline-none md:hidden "
        onClick={()=>setIsOpen(!isOpen)}
      >
        <span className="sr-only">Open main menu</span>
     
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
</div>
    <div
      className={isOpen?"w-full md:block md:w-auto":" md:block md:w-auto hidden"}
      id="mobile-menu"
    >
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
        <li>
          <a
            href="#home"
            className="block py-2 pr-4 pl-3 text-[#023246] border-b border-t border-gray-100 hover:bg-beige md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="block py-2 pr-4 pl-3 text-[#023246] border-b border-gray-100 hover:bg-beige md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="block py-2 pr-4 pl-3 text-[#023246] border-b border-gray-100 hover:bg-beige md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="block py-2 pr-4 pl-3 text-[#023246] border-b border-gray-100 hover:bg-beige md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href={Cv}
            className="block p-3 text-[#023246] md:border-0 md:p-2 hover:font-bold   bg-yellow  rounded-md  transform hover:scale-110 md:mt-0 mt-2 shadow shadow-md drop-shadow-md hover:drop-shadow-xl opacity-90 lg:rounded-xl "
          download>
            Download CV
          </a>
        </li>
      </ul>
    </div>

  </div>
</nav>
    </>
  );
};

export default SideBar;
