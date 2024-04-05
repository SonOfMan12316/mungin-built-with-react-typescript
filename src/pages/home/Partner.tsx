import LoyalPartner from '../../components/icons/LoyalPartner';
import Marquee from '../../components/global/Marquee';
const Partner = () => {
  return (
    <div className='px-6'>
      <div className='flex justify-center my-6'>
        <LoyalPartner />
      </div>
      <div>
        <Marquee>
          <div>testing</div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partner;
