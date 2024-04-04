import React from 'react'

type Props = {}

const Maps = (props: Props) => {
  return (
    <div className="relative inset-0 overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/Maps.png)] bg-center filter backdrop-blur-3xl ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a className="text-4xl font-bold text-white">All Across India</a>
          <div className='flex text-white flex-col gap-5 p-[30px]'>
            <ul className='flex gap-8 justify-center'>
                <li className='text-white font-bold'>NEW DELHI</li>
                <li className='text-white font-bold'>MUMBAI</li>
                <li className='text-white font-bold'>BANGLORE</li>
                <li className='text-white font-bold'>CHENNAI</li>
                <li className='text-white font-bold'>HYDERABAD</li>
            </ul>
            <ul className='flex gap-8 justify-center'>
                <li className='text-white font-bold'>AHMEDABAD</li>
                <li className='text-white font-bold'>COCHIN</li>
                <li className='text-white font-bold'>KOLKATA</li>
                <li className='text-white font-bold'>INDORE</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Maps;