import { FaMoon } from "react-icons/fa6";
import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";


function Header() {

  const dispatch = useDispatch()
  return (
    <div className='w-full h-12 bg-white flex gap-8 justify-start items-center p-4 text-xs text-slate-400   hidden sm:flex dark:bg-gray-800'>
      <p className='hover:text-slate-700 hover:cursor-pointer'>Blogs</p>
      <p className='hover:text-slate-700 hover:cursor-pointer'>News</p>
      <p className='hover:text-slate-700 hover:cursor-pointer'>Help center</p>
      <p className='hover:text-slate-700 hover:cursor-pointer'>Customer care</p>
      
      <Button className="ml-[710px] w-8  h-8 flex items-center" color="gray" pill onClick={()=> dispatch(toggleTheme())}><FaMoon/></Button>
      
    </div>
  )
}

export default Header

