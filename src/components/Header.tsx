
function Header() {
  return (
    <div className='w-full h-12 bg-white flex gap-8 justify-start items-center p-4 text-xs text-slate-400 hover:cursor-pointer hidden sm:flex'>
      <p className='hover:text-slate-700'>Blogs</p>
      <p className='hover:text-slate-700'>News</p>
      <p className='hover:text-slate-700'>Help center</p>
      <p className='hover:text-slate-700'>Customer care</p>
    </div>
  )
}

export default Header

