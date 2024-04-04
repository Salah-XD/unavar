import React from 'react'

type Props = {}

const Maps = (props: Props) => {
  return (
    <div className="relative overflow-hidden bg-cover bg-no-repeat p-40 text-center bg-img bg-[url(/images/Maps.png)]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a className="text-4xl font-bold text-white">All Across India</a>
          <div>
            <ul>
                <li>NEW DELHI</li>
                <li>MUMBAI</li>
                <li>BANGLORE</li>
                <li>CHENNAI</li>
                <li>HYDERABAD</li>
            </ul>
            <ul>
                <li>AHMEDABAD</li>
                <li>COCHIN</li>
                <li>KOLKATA</li>
                <li>INDORE</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Maps;