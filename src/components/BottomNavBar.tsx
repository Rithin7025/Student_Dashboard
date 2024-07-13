import { RiDashboardHorizontalFill } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoStatsChartSharp } from "react-icons/io5";
import { Avatar } from "flowbite-react";


function BottomNavBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white flex justify-around items-center py-2 lg:hidden dark:bg-gray-800">
        {/* dashboard */}
        <div className="flex flex-col items-center">
        <RiDashboardHorizontalFill />
        <p>Dashboard</p>
        </div>
        {/* Assignments */}
        <div className="flex flex-col items-center">
        <IoDocumentTextOutline />
        <p>Assigment</p>
        </div>
        {/* perfomance */}
        <div className="flex flex-col items-center">
        <IoStatsChartSharp />
        <p>Perfomance</p>
        </div>
        {/* profile */}
        <div className="flex flex-col items-center">
        <Avatar img="/images/newAvatar.jpg" size="xs" rounded/>
        <p>Profile</p>
        </div>

    </div>
  )
}

export default BottomNavBar