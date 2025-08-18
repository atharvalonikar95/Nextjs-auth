import React from 'react'


type props = {
    preview: boolean,
    image: string;
}

const ImgModal
    = ({ preview, image }: props) => {
        return (
            <div className=' fixed inset-0 bg-gray-950 opacity-[70%]  h-screen w-[40%]  
        transition-transform  flex flex-row items-center justify-center gap-4 border-2 border-black  z-50'>
                <div className='h-[50%] w-[50%] bg-white flex justify-center  items-center'>
                    {preview && (

                        <img className='' src={image} alt="image not found" height={250} width={250} />
                    )

                    }
                </div>
            </div>
        )
    }

export default ImgModal
