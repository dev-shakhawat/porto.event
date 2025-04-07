import React from 'react'
import { GlobalSorts } from '../common/GlobalSorts'


import { MdOutlineSettingsSuggest } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";

export const GlobalBtn = () => {
  return (
    <div className=' fixed top-33 left-0 z-10  '>
        <GlobalSorts icon={<MdOutlineSettingsSuggest />}  />
        <GlobalSorts icon={<IoCart />}  />
        <GlobalSorts icon={<FaRegCircleDot />}  />
    </div>
  )
}