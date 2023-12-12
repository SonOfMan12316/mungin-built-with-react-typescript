const SinusodialLine = ({ ...props }) => {
  //   const animationStyle = {
  //     animation: 'move-sinusoidal 5s linear infinite',
  //     transformOrigin: 'center', // Optional: Set the transform origin to the center for better rotation
  //   };
  return (
    <svg
      width={201}
      height={36}
      //   style={animationStyle}
      viewBox='0 0 201 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M200 18.0397C193.741 5.52252 176.991 -12.0015 160.059 18.0397C143.126 48.0809 128.652 30.5569 123.531 18.0397C118.638 5.18114 105.097 -12.8208 90.0764 18.0397C75.0558 48.9002 60.3765 30.8983 54.9145 18.0397C53.2076 5.29493 39.1854 -12.2829 29 17C24 30.6667 11.4 49.8 1 17'
        stroke='url(#paint0_linear_378_968)'
        strokeOpacity={'0.75'}
        strokeWidth={'1.11957'}
        strokeDasharray={'2.24 2.24'}
      />
      <defs>
        <linearGradient
          id='paint0_linear_378_968'
          x1='-417'
          y1='-28.5001'
          x2='234'
          y2='18'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={'#75A843'} stopOpacity={'0'} />
          <stop offset='1' stopColor={'#75A843'} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SinusodialLine;
