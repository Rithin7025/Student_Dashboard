import { Table } from "flowbite-react";
import { useState, useEffect } from "react";
import { BiLinkExternal } from "react-icons/bi";
import moment from 'moment';

import { ClassData } from '../utils/types';
import { Modal,Button } from "flowbite-react";


//interface 
interface UpcomingClassesProps {
  data: ClassData[];
}

function UpcomingClasses({data } : UpcomingClassesProps) {
  const [isMobile, setIsMobile] = useState(false); //state to store the mobile view or desktop view
  const [showBookedOnly, setShowBookedOnly] = useState(false);
  const [showModal, setShowModal] = useState(false) // state to keep track of modal opening and close


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

  
  //function to format time
  const formatLocalTime  = (utcTimeString : string)  => {
    
    const date = new Date(utcTimeString)  
   // Format the date and time
   return date.toLocaleString("en-US");

  } 
/*
//function to determine which button to show ------------------------------------------->

**/

  const renderActionButton  = (data : any) => {

    //finding the current time
    const currentTime : any  = new Date();
    //finding the time of class
    const classTime : any= new Date(data.timeRequired)

    //time difference 
    const timeDifference = classTime - currentTime ; //time difference in milliseconds

/*
  <-- checks the conditions to find the appropriate button !-------------------------------------------------->
**/
    if(data.isBooked){ 
      if(timeDifference > 0){
        //class time is future
        const hoursRemaining = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        

       //for mobile return this button --------------------------------------------------------------------->

       if(isMobile){
        return ( 

          <button disabled className="p-2 w-full font-semibold text-blue-700 text-sm rounded-lg flex items-center justify-center gap-1 hover:cursor-pointer hover:bg-slate-200">
           {hoursRemaining} hrs {minutesRemaining} mins 
          </button>
          
        )
       }else{

         //timer for desktop button if booked ---------------------------------------------------------------------->
         return ( 
  
          <button disabled className="p-2 w-full font-semibold text-blue-700 text-sm rounded-lg flex items-center justify-center gap-1 hover:cursor-pointer hover:bg-slate-200">
           {hoursRemaining} hrs {minutesRemaining} mins 
          </button>
          
        );
       }
      }else if (timeDifference == 0){             //timer gets refreshes when page loads or reload
        // Class time is present  
        // button to show Join link in mobile view if class is present ------------------------------------>
        if(isMobile){
          return (
            <div className="p-2">
              <button className="p-2 w-full bg-blue-700 text-white text-sm rounded-lg flex items-center justify-center gap-1 hover:cursor-pointer hover:bg-blue-500">Join now <BiLinkExternal /></button>
             </div>
          );

          //Returning Join button for desktop--------------------------------------------------------------->
        }else {

          return (
            <button className="p-2 w-full bg-blue-700 text-white text-sm rounded-lg flex items-center justify-center gap-1 hover:cursor-pointer hover:bg-slate-500">
              Join Now
            </button>
          );
        }
      }else {
         // Class time is in the past
      return (
        <button disabled className="p-2 w-full bg-gray-500 text-white text-sm rounded-lg flex items-center justify-center gap-1">
          Class Ended
        </button>
      );
      }
      
     
    }else {

      //show book now button for mobile and desktop
      
      // mobile
      if(isMobile){

        return (
  
          
          <button onClick={()=> setShowModal(true)} className="w-[340px] ml-2 h-10 bg-slate-200 text-sm font-semibold text-black rounded-lg flex items-center justify-center  hover:cursor-pointer hover:text-white hover:bg-slate-500">
          Book Now
        </button>
        )
      }else {
        return (
          <button onClick={()=> setShowModal(true)} className="p-2 w-full bg-slate-200 text-sm font-semibold text-black rounded-lg flex items-center justify-center gap-1 hover:cursor-pointer hover:text-white hover:bg-slate-500">
          Book Now
        </button>
        )
      }

    }
  }

  /*
  //filtering data based on checkbox
  **/
 const filteredData = showBookedOnly ? data.filter(item => item.isBooked) : data

 
  return (
    <div className=" h-screen lg:h-[425px] w-full lg:w-[560px] mt-3 ml-3  flex flex-col p-2 bg-white rounded-lg">
      {/* heading upcoming class and Booked only check box */}
      <div className="h-14  p-2  bg-white flex justify-between">
        {/* right side headging */}
        <div>
          <p className="font-semibold ">Upcoming classes</p>
          <p className="text-xs text-slate-400">For next 7 days</p>
        </div>

        {/* left side check box */}
        <div className="flex items-center mb-4 gap-2">
    <label htmlFor="Booked only" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Booked only</label>
    {/* here the checked is set to true of false according to the checks and changing the setShowbookedonly */}
    <input id="Booked only" checked={showBookedOnly} onChange={(e)=> setShowBookedOnly(e.target.checked)} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
</div>
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
              {filteredData.map((item) => (
                <Table.Row
                  key={item.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>
                    {item.id}
                    
                    </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex flex-col">
                    {item.className}
                    <p className="text-xs font-thin text-slate-400">{moment().format((formatLocalTime(item.timeRequired)))}</p>
                  </Table.Cell>

                  <Table.Cell className="">
                  <img 
        src="/images/newAvatar.jpg" 
        alt="avatar" 
        className="rounded-full" 
        style={{ width: '30px', height: '30px' }}
      />
                    <p className="text-xs mt-1">{item.instructor}</p>
                    </Table.Cell>
                  <Table.Cell>

                   {renderActionButton(item)}
                   
                    </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}

        {/* 
        
         * div for mobile screens 
        
        */}
 
        {isMobile && (


           <div className=" h-[500px] overflow-y-auto space-y-4"> 
            {
              filteredData.map((item)=> (
        
            <div key={item.id} className="h-36 w-full   rounded-lg border border-gray-300 mt-3 flex flex-col">
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

            
             {renderActionButton(item)}
            </div>

              ))
            }
           </div>
        )}
      </div>

      <Modal show={showModal} onClose={()=> setShowModal(false)} popup size='md'>
        <Modal.Header />
        
        <Modal.Body>
          <div className="p-2">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              You are about to book a spot for this session. Are you sure you want to proceed ?
            </p>

          </div>
        
        </Modal.Body>
        <Modal.Footer>
          <Button color='blue' onClick={() => setShowModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setShowModal(false)}>
            Decline
          </Button>
        </Modal.Footer>

        
      </Modal>
    </div>
  );
}

export default UpcomingClasses;
