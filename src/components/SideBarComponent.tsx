import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiUser,
} from "react-icons/hi";
import AvatarComponent from "./Avatar";

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
            <Sidebar.Item href="#" icon={HiChartPie} className="py-1 text-sm">
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiChartPie} className="py-1 text-sm">
              All classes
            </Sidebar.Item>

            <Sidebar.Item href="#" icon={HiInbox} className="py-1 text-sm">
              Assignment
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser} className="py-1 text-sm">
              Perfomance
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiShoppingBag}
              className="py-1 text-sm"
            >
              Fee Details
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiArrowSmRight}
              className="py-1 text-sm"
            >
              Settings
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default SideBarComponent;
