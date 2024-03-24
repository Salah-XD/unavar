import React from 'react'
import Image from 'next/image'

const Clients = () => {
    return (
        <div className='h-[100vh] bg-white py-10'>
            <div className='p-0 bg-slate-50 m-0 h-[90vh]'>
                <div className='flex flex-col gap-3 justify-center text-center py-5'>
                    <a className='text-black font-bold text-lg'>OUR MAJOR CLIENTS</a>
                    <p className='text-black font-medium'>Building Trust Through Quality Assurance</p>
                </div>
                <div className='flex flex-col gap-3'>
                <div className='flex py-2 justify-center gap-10'>
                    <div className='bg-white  w-[15vw] h-[30vh] flex justify-center align-middle rounded-2xl shadow-lg'>
                        <Image alt="img" src="/images/Sapphire.png" width={180} height={50} className='object-cover rounded-2xl'/>
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle'>
                        <Image alt="img" src="/images/Anjappar.jpg" width={180} height={50} className='object-cover rounded-2xl' />
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle'>
                        <Image alt="img" src="/images/HardCastle.png" width={200} height={50} className='object-cover rounded-2xl' />
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle'>
                        <Image alt="img" src="/images/Jubilant.png" width={200} height={50} className='object-cover rounded-2xl' />
                    </div>
                </div>
                <div className='flex py-3 justify-center gap-10'>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle'>
                        <Image alt="img" src="/images/Kitchen.jpg" width={200} height={100} className='object-cover rounded-2xl' />
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle'>
                        <Image alt="img" src="/images/Kitchen.jpg" width={200} height={100} className='object-cover rounded-2xl' />
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle'>
                    <Image alt="img" src="/images/Kitchen.jpg" width={200} height={100} className='object-cover rounded-2xl' />
                    </div>
                </div>
                </div>
            </div>
        </div>
        // bg-[#d3faff] -Use for background
    );
};

export default Clients