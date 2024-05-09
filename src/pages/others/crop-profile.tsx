import React from "react"
import Logo from "../../assets/images/mungin-logo.png"

const CropProfile: React.FC = () => {
  return <div>
    <main className='w-full h-full flex items-center justify-between px-6 md:px-10 lg:px-16 xl:px-32 py-4 relative'>
        <div className='cursor-pointer h-16'>
          <img className='md:w-32 lg:w-36' src={Logo} alt={'hmm'} />
        </div>
    </main>
  </div>;
};

export default CropProfile;
