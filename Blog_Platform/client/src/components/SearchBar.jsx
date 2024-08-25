import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import { Search, X } from 'lucide-react'
const SearchBar = ()=>{
    return(
        <>
         <div className="flex rounded-xl p-2 py-3 gap-2 shadow-md w-2/3 shadow-t contrast-200 shadow-light opacity-100 shadow-xl z-10">
             
             <Search />
             <input
               type="text"
               className="w-full focus:outline-none bg-transparent"
               placeholder="Search about..."
             />
             <X />
             </div>
            
        </>
    )
}
export default SearchBar;