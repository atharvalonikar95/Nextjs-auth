import React from 'react'
import { SpinningCircles } from 'react-loading-icons'

type props={
    loading:boolean
}

const LoaderModal = ({loading}:props) => {
  return (
    <div className=' fixed inset-0 bg-gray-950 opacity-[70%]  h-screen w-full 
        transition-transform  flex flex-row items-center justify-center gap-4 border-2 border-black  z-50'>
        <div>
            <SpinningCircles />
        </div>
    </div>
  )
}

export default LoaderModal