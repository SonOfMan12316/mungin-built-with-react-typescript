import React from 'react';
import LoyalPartner from '../../components/icons/LoyalPartner';
import Marquee from '../../components/global/Marquee';
import AirBnBLogo from '../../components/logos/AirBnBLogo';
import AmazonLogo from '../../components/logos/AmazonLogo';
import BookMyShowLogo from '../../components/logos/BookMyShowLogo';
import GoogleLogo from '../../components/logos/GoogleLogo';
import HubspotLogo from '../../components/logos/HubspotLogo';
import MicrosoftLogo from '../../components/logos/MicrosoftLogo';
import OlaLogo from '../../components/logos/OlaLogo';
import OyoLogo from '../../components/logos/OyoLogo';
import WalmartLogo from '../../components/logos/WalmartLogo';

type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;

const svgComponents: SVGComponent[] = [
  AirBnBLogo,
  AmazonLogo,
  BookMyShowLogo,
  GoogleLogo,
  HubspotLogo,
  MicrosoftLogo,
  OlaLogo,
  OyoLogo,
  WalmartLogo,
];

const Partner = () => {
  return (
    <div className='px-6 md:px-10 lg:px-16 xl:px-32 py-10'>
      <div className='flex justify-center my-4'>
        <LoyalPartner />
      </div>
      <div>
        <Marquee>
          {svgComponents.map((SVGComponent, index) => (
            <div key={index} className='grid grid-cols-2'>
              <SVGComponent />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Partner;
