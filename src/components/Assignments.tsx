
function Assignments() {
   //sample assignments
   const assignments = [
    {
      id : 1,
      name : 'Logo Design for Airline',
      date : '20/3/23'
    },
    {
      id : 2 , 
      name : 'UI/UX Design - Ecommerce Mobile App',
      date : '20/3/23'
    },
    {
      id : 3 , 
      name : 'User Persona and User Journey',
      date : '20/3/23'
    },
    {
      id : 4,
      name : 'Typefaces',
      date : '20/3/23'
    },
  ]
  return (
    <div className=' bg-white dark:bg-gray-800 lg:h-[425px] w-full h-full lg:w-[560px] mt-3 ml-2 lg:mr-0 rounded-lg flex flex-col p-5'>

      <p className='font-semibold mb-6'>Assignments</p>

     {/* Assignments are mapped here */}
     {
      assignments.map((item) => (

     <div key={item.id} className='h-14 border border-slate-300 mb-2 rounded-lg flex flex-col  justify-start p-2'>
      <p className='text-sm'>{item.name}</p>
      <p className='text-xs text-slate-400'>Deadline -  {item.date}</p>
     </div>

      ))
     }


    </div>
  )
}

export default Assignments     