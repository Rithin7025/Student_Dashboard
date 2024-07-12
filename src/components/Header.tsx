
function Header() {
  return (
    <div className='w-full h-12 bg-white flex gap-8 justify-start items-center p-4 text-xs text-slate-400  hidden sm:flex'>
      <p className='hover:text-slate-700 hover:cursor-pointer'>Blogs</p>
      <p className='hover:text-slate-700 hover:cursor-pointer'>News</p>
      <p className='hover:text-slate-700 hover:cursor-pointer'>Help center</p>
      <p className='hover:text-slate-700 hover:cursor-pointer'>Customer care</p>
    </div>
  )
}

export default Header

