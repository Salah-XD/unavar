import React from 'react'

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
                        <img alt='img1' src={img1} className='object-cover rounded-2xl'></img>
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle'>
                        <img src={img2} alt='img2' className='object-cover rounded-2xl'></img>
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle'>
                        <img src={img3} alt='img3' className='object-cover rounded-2xl'></img>
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle'>
                        <img src={img4} alt='img4' className='object-cover rounded-2xl'></img>
                    </div>
                </div>
                <div className='flex py-3 justify-center gap-10'>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle'>
                        <img src={img5} alt='img5' className='object-cover rounded-2xl'></img>
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle'>
                        <img src={img6} alt='img6' className='object-cover rounded-2xl'></img>
                    </div>
                    <div className='bg-white w-[15vw] h-[30vh] rounded-2xl shadow-lg flex justify-center align-middle'>
                        <img src={img7} alt='img7' className='object-cover rounded-2xl'></img>
                    </div>
                </div>
                </div>
            </div>
        </div>
        // bg-[#d3faff] -Use for background
    );
};

export default Clients