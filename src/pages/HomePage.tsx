import SideBarComponent from "../components/SideBarComponent";
import Header from "../components/Header";
import UpcomingClasses from "../components/UpcomingClasses";
import Assignments from "../components/Assignments";
import BottomNavBar from "../components/BottomNavBar";
import { Pagination } from "flowbite-react";
import { useEffect, useState } from "react";

//sample data
import { classesData } from "../utils/data";


/* 
 *  Homepage Component

 * This component serves as the main layout for the home page,

 * including the sidebar and header.
**/

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4
  const [filteredData, setFilteredData] = useState(classesData); // Initial data state
  
  //calculating index
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  
  //function to handle page change  
  const onPageChange = (page: number) => setCurrentPage(page);

  useEffect(() => {
    //re-render if change in filteredData or currentPage
    console.log(currentData)
  }, [currentPage, filteredData]);

   useEffect(()=>{
    //re render if change in filterd Data or currentPage
   },[currentPage, filteredData])
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
          <UpcomingClasses data={currentData}  />
        </div>
        <div className="hidden lg:block lg:w-1/2 h-full flex-grow overflow-y-hidden">
          <Assignments />
        </div>
          
        </div>
        
        <div className="flex overflow-x-auto sm:justify-center md:flex hidden">
        <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
        </div> 

        {/* Bottom nav bar */}
        <BottomNavBar />
        
      </div>
    </div>
  );
}

export default HomePage;
