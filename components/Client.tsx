import React from 'react';
import Image from "next/image";


const img1 = "/images/Sapphire.png";
const img2 = "/images/Anjappar.jpg";
const img3 = "/images/HardCastle.png";
const img4 = "/images/Jubilant.png";
const img5 = "/images/Kitchen.jpg"
const img6 = "/images/Kitchen.jpg"
const img7 = "/images/Kitchen.jpg"

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
                        <Image alt="img1" src={img1} className='object-cover rounded-2xl' width={200} height={50}/>
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle'>
                        <Image alt="img2" src={img2} className='object-cover rounded-2xl' width={200} height={50}/>
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle'>
                        <Image alt="img3" src={img3} className='object-cover rounded-2xl' width={200} height={50}/>
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle'>
                        <Image alt="img4" src={img4} className='object-cover rounded-2xl' width={200} height={50}/>
                    </div>
                </div>
                <div className='flex py-3 justify-center gap-10'>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle'>
                        <Image alt="img5" src={img5} className='object-cover rounded-2xl' width={200} height={50}/>
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle'>
                        <Image alt="img6" src={img6} className='object-cover rounded-2xl' width={200} height={50}/>
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle'>
                        <Image alt="img7" src={img7} className='object-cover rounded-2xl' width={200} height={50}/>
                    </div>
                </div>
                </div>
            </div>
        </div>
        // bg-[#d3faff] -Use for background
    );
};

export default Clients