import React from 'react'



export const GlobalSorts = ({icon}) => {
  return (
    <div className=' w-[40px] h-[40px] cursor-pointer rounded-tr-md rounded-br-md mt-[1px] bg-primary grid place-items-center text-white text-lg  '>
        {icon}
    </div>
  )
}