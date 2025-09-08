import React from 'react'


type props = {
    preview: boolean,
    image: string;
}

const ImgModal
    = ({ preview, image }: props) => {
        return (
            <div className=' fixed inset-0 bg-gray-950 opacity-[70%]  h-screen w-[40%]  
        transition-transform  flex flex-row items-center justify-center gap-4 border-2 border-white  z-50'>
                <div className=' gap-4 rounded-[50%]   h-[50%] w-[50%] bg-white flex justify-center  items-center'>
                    {preview && (
                        <img className=' rounded-[50%] border-2 border-red items-center justify-center' 
                        src={image} 
                        alt="image not found" 
                        height={150} 
                        width={250} />
                    )

                    }
                </div>
            </div>
        )
    }

export default ImgModal
