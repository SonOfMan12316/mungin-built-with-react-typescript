const Leaf = ({ ...props }) => {
  return (
    <svg
      width={30}
      height={30}
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath={'url(#clip0_328_160)'}>
        <path
          d='M22.9667 20.5365C22.9667 20.5365 25.1319 14.3874 22.1741 9.97134C19.2163 5.55532 7.62516 2.44949 7.62516 2.44949C7.62516 2.44949 4.03636 13.9112 5.89886 18.5514C7.76137 23.1915 16.2306 24.4256 16.2306 24.4256'
          stroke='#83BF4F'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M21.7673 26.9448C21.7673 26.9448 19.1336 20.4519 16.3693 16.1809C13.6045 11.9098 10.4189 9.41016 10.4189 9.41016'
          stroke='#83BF4F'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16.3693 16.1804L9.96141 14.981'
          stroke='#83BF4F'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16.3693 16.1797L17.1804 11.2207'
          stroke='#83BF4F'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_328_160'>
          <rect
            width='24'
            height='24'
            fill='white'
            transform='matrix(-0.258819 0.965926 0.965926 0.258819 6.21094 0)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Leaf;
