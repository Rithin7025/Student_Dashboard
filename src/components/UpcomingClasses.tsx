import { Table } from "flowbite-react";
import { useState, useEffect } from "react";
import { BiLinkExternal } from "react-icons/bi";


function UpcomingClasses() {
  const [isMobile, setIsMobile] = useState(false); //state to store the mobile view or desktop view

  // useEffect hook to add and clean up the resize event listener
  useEffect(() => {
    //function to handle window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); //setting true when the window is smaller than 640px (mobile screen)
    };
    window.addEventListener("resize", handleResize); //adding an even listner to the resize event of the window

    // Call handleResize initially to set the correct state based on initial window size
    handleResize();
    return () => window.removeEventListener("resize", handleResize); //clean up function to remove even listner when component unmounts
  }, []);

  //sample data
  const data = [
    {
      id: 1,
      className: "UI/Ux desinging",
      instructor: "Mukesh",
      action: "join link",
    },
    {
      id: 1,
      className: "UI/Ux desinging",
      instructor: "Mukesh",
      action: "join link",
    },
    {
      id: 1,
      className: "UI/Ux desinging",
      instructor: "Mukesh",
      action: "join link",
    },
    {
      id: 1,
      className: "UI/Ux desinging",
      instructor: "Mukesh",
      action: "join link",
    },
    {
      id: 1,
      className: "UI/Ux desinging",
      instructor: "Mukesh",
      action: "join link",
    },
    {
      id: 1,
      className: "UI/Ux desinging",
      instructor: "Mukesh",
      action: "join link",
    },
    {
      id: 1,
      className: "UI/Ux desinging",
      instructor: "Mukesh",
      action: "join link",
    },
    {
      id: 1,
      className: "UI/Ux desinging",
      instructor: "Mukesh",
      action: "join link",
    },
  ];
  return (
    <div className=" h-screen lg:h-[425px] w-full lg:w-[560px] mt-3 ml-3  flex flex-col p-2 bg-white">
      {/* heading upcoming class and Booked only check box */}
      <div className="h-14  p-2  bg-white flex justify-between">
        {/* right side headging */}
        <div>
          <p className="font-semibold ">Upcoming classes</p>
          <p className="text-xs text-slate-400">For next 7 days</p>
        </div>

        {/* left side check box */}
        <div>check</div>
      </div>

      {/* table goes here */}

      <div className="flex flex-col">
        {/* 
        
         * table for larger screens 
        
        */}

        {!isMobile && (
          <Table>
            <Table.Head>
              <Table.HeadCell>id</Table.HeadCell>
              <Table.HeadCell>Class Name</Table.HeadCell>
              <Table.HeadCell>Instructor</Table.HeadCell>
              <Table.HeadCell>Actions</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {data.map((item) => (
                <Table.Row
                  key={item.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>{item.id}</Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.className}
                  </Table.Cell>
                  <Table.Cell>{item.instructor}</Table.Cell>
                  <Table.Cell>{item.action}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}

        {/* 
        
         * div for mobile screens 
        
        */}
 
        {isMobile && (


           <div className="space-y-4"> 
            {
              data.map((item)=> (
        
            <div className="h-36 w-full  rounded-lg border border-gray-300 mt-3 flex flex-col">
             {/* 

             heading and time
             
             */}
             <div className="flex justify-between">
                <p className="font-bold p-3">{item.className}</p>
                <p className="p-3 text-xs text-slate-400">today at 6 pm</p>
             </div>

             {/* 

             avatar and name

             */}
             <div className="flex gap-4 items-center mb-2">

             <img 
        src="/images/newAvatar.jpg" 
        alt="avatar" 
        className="rounded-full ml-4" 
        style={{ width: '30px', height: '30px' }}
      />
       <p className="text-xs font-semibold"> by {item.instructor}</p>
             </div>

             <div className="p-2">
              <button className="p-2 w-full bg-blue-700 text-white text-sm rounded-lg flex items-center justify-center gap-1 hover:cursor-pointer hover:bg-blue-500">Join now <BiLinkExternal /></button>
             </div>
            </div>

              ))
            }
           </div>
        )}
      </div>
    </div>
  );
}

export default UpcomingClasses;
