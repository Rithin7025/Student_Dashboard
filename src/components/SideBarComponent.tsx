import React from "react";
import { Sidebar } from "flowbite-react";

import { MdLogout } from "react-icons/md";

import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoStatsChartSharp } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";



import AvatarComponent from "./Avatar";

/* 
 *  Sidebar Component

 * This component serves sidebar for  the home page,

 * contains Dashboard,All classes , Assignments, perfomance , fee details, settings
**/
function SideBarComponent() {
  return (
    <div className="bg-white flex flex-col justify-center">
      {/* Logo goes here */}
      <div className="h-14  gap-4 flex items-center hidden sm:flex">
         {/* div for image */}
        <div className="h-6 w-8 ml-2 flex items-center mt-2"> 
        <img src="images/newAvatar.png" alt="" />
        </div>
        <p className="text-base font-bold ">Logo</p>
      </div>

      {/* avatar div */}
      <AvatarComponent />

      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        className="hidden lg:block w-52 "
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {/* Dashboard  */}
          <Sidebar.Item href="#" className="py-2 text-sm">
              <span className="flex items-center">
                <RiDashboardHorizontalFill className="text-sm" />
                <span className="ml-2">Dashboard</span>
              </span>
            </Sidebar.Item>
            {/* All classes */}
            <Sidebar.Item href="#" className="py-2 text-sm">
              <span className="flex items-center">
                <MdOutlinePeopleAlt className="text-sm" />
                <span className="ml-2">All classes</span>
              </span>
            </Sidebar.Item>
            {/* Assignment */}
            <Sidebar.Item href="#" className="py-2 text-sm">
              <span className="flex items-center">
                <IoDocumentTextOutline className="text-sm" />
                <span className="ml-2">Assignment</span>
              </span>

            </Sidebar.Item>
            {/* Perfomance */}
            <Sidebar.Item href="#" className="py-2 text-sm">
              <span className="flex items-center">
                <IoStatsChartSharp className="text-sm" />
                <span className="ml-2">Performance</span>
              </span>
            </Sidebar.Item>
            {/* Fee details */}
            <Sidebar.Item href="#" className="py-2 text-sm">
              <span className="flex items-center">
                <LiaRupeeSignSolid className="text-sm" />
                <span className="ml-2">Fee Details</span>
              </span>
            </Sidebar.Item>

            {/* settings */}
            <Sidebar.Item href="#" className="py-2 text-sm">
              <span className="flex items-center">
                <IoSettingsOutline className="text-sm" />
                <span className="ml-2">Settings</span>
              </span>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
     <button className="mt-20 text-sm text-slate-500 flex items-center p-2 pl-6 font-semibold gap-2 hidden sm:flex">< MdLogout />Log out</button>
      </Sidebar>


   {/* Log out button  */}
    </div>
  );
}

export default SideBarComponent;
