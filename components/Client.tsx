import React from 'react'
import Image from 'next/image'

const Clients = () => {
    return (
        <div className='h-[100vh] bg-white py-10'>
            <div className='p-0 m-0 bg-[#d3faff] h-[90vh]'>
                <div className='flex flex-col gap-4 justify-center text-center py-5'>
                    <a className='text-black font-bold'>OUR MAJOR CLIENTS</a>
                    <p className='text-black font-medium'>Building Trust Through Quality Assurance</p>
                </div>
                <div className='flex flex-col gap-4'>
                <div className='flex py-2 justify-center gap-10'>
                    <div className='bg-white w-[15vw] h-[30vh] flex justify-center align-middle rounded-2xl shadow-md'>
                        <Image alt="img" src="/images/Sapphire.png" width={200} height={100} className='object-cover rounded-2xl shadow-md' />
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-md flex justify-center align-middle'>
                        <Image alt="img" src="/images/Anjappar.jpg" width={200} height={100} className='object-cover rounded-2xl shadow-md' />
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-md flex justify-center align-middle'>
                    <Image alt="img" src="/images/HardCastle.png" width={200} height={100} className='object-cover rounded-2xl shadow-md' />
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-md'>
                    <Image alt="img" src="/images/Jubilant.png" width={200} height={100} className='object-cover rounded-2xl shadow-md' />
                    </div>
                </div>
                <div className='flex py-3 justify-center gap-10'>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-md'>
                        <Image alt="img" src="/images/Kitchen.jpg" width={200} height={100} className='object-cover rounded-2xl shadow-md' />
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-md'>
                        <Image alt="img" src="/images/Kitchen.jpg" width={200} height={100} className='object-cover rounded-2xl shadow-md' />
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-md'>
                    <Image alt="img" src="/images/Kitchen.jpg" width={200} height={100} className='object-cover rounded-2xl shadow-md' />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Clients