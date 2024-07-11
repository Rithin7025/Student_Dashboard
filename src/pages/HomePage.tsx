import React from 'react'
import SideBarComponent from '../components/SideBarComponent'
import Header from '../components/Header'

/* 
 *  Homepage Component

 * This component serves as the main layout for the home page,

 * including the sidebar and header.
**/

function HomePage() {
  return (
    // Container div for the entire screen
    <div className='h-screen w-screen flex  '>

        {/* Sidebar component */}
<SideBarComponent />
    <div className='flex flex-col w-full'>

{/* Header component */}
<Header />

{/* Dashboard Heading */}
<div className='bg-white h-14 w-full flex items-center '>
    <p className='ml-6 text-2xl font-bold'> Dashboard</p>
</div>
        </div>

{/*  */}
   
   </div>
  )
}

export default HomePage