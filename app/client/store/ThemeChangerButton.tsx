// import { RootState } from '@reduxjs/toolkit/query'
'use client'
import React from 'react'
import { RootState } from '../store/store'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import { toggleMode } from './themeSlice'
const ThemeChangerButton = () => {

    const mode = useSelector((state:RootState )=>state.theme.mode)
    const dispatch=useDispatch()
  return (
    <div className={mode==='light'?`bg-white text-black h-full `:`bg-gray-800 text-white h-full `}>
        <button onClick={()=>dispatch(toggleMode())}>
            {mode==='light'? 'Dark Mode':'light mode'}
        </button>
    </div>
  )
}

export default ThemeChangerButton