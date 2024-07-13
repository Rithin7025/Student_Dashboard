

function AvatarComponent() {
  return (
    <div className='h-36 w-full flex flex-col items-start justify-start mt-6 mb-4  pl-7 pb-1 hidden sm:hidden md:flex '>
        
        <img 
        src="/images/newAvatar.jpg" 
        alt="avatar" 
        className="rounded-full" 
        style={{ width: '60px', height: '60px' }}
      />
        
       <p className="font-semibold  mt-1">John doe</p>
       <p className="text-xs text-slate-500">Intermediate</p>
    </div>
  )
}

export default AvatarComponent