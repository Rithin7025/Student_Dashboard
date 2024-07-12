import React from "react";
import SideBarComponent from "../components/SideBarComponent";
import Header from "../components/Header";
import UpcomingClasses from "../components/UpcomingClasses";
import Assignments from "../components/Assignments";
import BottomNavBar from "../components/BottomNavBar";

/* 
 *  Homepage Component

 * This component serves as the main layout for the home page,

 * including the sidebar and header.
**/

function HomePage() {
  return (
    // Container div for the entire screen
    <div className="h-screen w-screen flex  ">
      {/* Sidebar component */}
      <SideBarComponent />
      {/* Here goes dashboard heading and upcoming classes */}
      <div className="flex flex-col w-full">
        {/* Header component */}
        <Header />

        {/* Dashboard Heading */}
        <div className="bg-white h-16 lg:h-14 w-full flex items-center ">
          <p className="ml-6 text-2xl font-bold mb-2"> Dashboard</p>
        </div>

        {/* upcoming classes And Assignments */}
        <div className="flex flex-col lg:flex-row w-full">
          {/* upcoming classes component goes here */}
        <div className="lg:w-1/2 h-full flex-grow overflow-y-hidden">
          <UpcomingClasses />
        </div>
        <div className="hidden lg:block lg:w-1/2 h-full flex-grow overflow-y-hidden">
          <Assignments />
        </div>
          
        </div>

        {/* Bottom nav bar */}
        <BottomNavBar />
        
      </div>
    </div>
  );
}

export default HomePage;
