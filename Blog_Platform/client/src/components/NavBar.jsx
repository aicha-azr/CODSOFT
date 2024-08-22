import logo from '../assets/logo.png';
const NavBar = ()=>{
return(<>
    <div className="flex justify-between items-center w-full rounded-md px-3 py-1.5   shadow-md text-textPrimary bg-white">
        <div className='border border-black rounded-full'>
            <img src={logo} alt="logo" width={40} height={40} className='rounded-full' />
        </div>
        <div className='flex gap-8 '>
            <a href="/home" className='text-textPrimary'>Home</a>
        <a href="/about" className='text-textPrimary'>About</a>
        <a href="/contact" className='text-textPrimary'>Contact</a>
        </div>
        <div className='flex gap-1'>
            <button  className='focus:outline-none bg-accent text-white py-3 px-6 rounded-full hover:bg-[#059669]'>Sign up</button>
            <button className=' focus:outline-none border border-primary text-primary py-3 px-6 rounded-full hover:bg-primary hover:text-white '>Sign in</button>
        </div>
        
    </div>
  
</>)
}
export default NavBar;