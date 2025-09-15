import React from 'react'


type props = {
    preview: boolean,
    image: string;
}

const ImgModal
    = ({ preview, image }: props) => {
        return (
            <div className='fixed inset-0 border-2 border-red-600 opacity-[100%]   flex flex-row lg:items-center items-center lg:justify-start justify-center h-[60%] lg:h-screen w-[100%] lg:w-[30%] z-50'>
                <div className=' absolute  bg-gray-950 opacity-[90%]  lg:opacity-[70%]  h-[100%] lg:h-screen w-[100%] lg:w-[100%]  
            transition-transform  flex flex-row items-center  justify-center gap-4 border-0 border-white  '>
                    <div className=' relative gap-4 rounded-lg  h-[90%] lg:h-[60%] w-[80%] lg:w-[60%] bg-blue-100 lg:bg-white flex justify-center  items-center'>
                        {preview && (
                            <img className=' h-[80%] w-[70%] lg:h-[60%] lg:w-[80%]  rounded-lg lg:border-2 lg:border-red items-center justify-center' 
                            src={image} 
                            alt="image not found" 
                            height={150} 
                            width={250} />
                        )

                        }
                    </div>
                </div>
            </div>
        )
    }

export default ImgModal
