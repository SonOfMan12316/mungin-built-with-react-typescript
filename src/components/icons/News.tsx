const News = ({ ...props }) => {
  return (
    <svg
      width={21}
      height={21}
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M14.364 10.3674L10.4147 4.70706L5.01376 6.63556M5.01376 6.63556L10.6846 17.3792L16.9146 14.0232M5.01376 6.63556L2.41589 17.4702C2.33845 17.7918 2.7497 17.9966 2.9597 17.7415L7.78533 11.8864'
        stroke={'#F8F8F8'}
        strokeWidth={'0.4375'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
      <path
        d='M10.6846 17.3792L18.0556 3.29743C18.2053 3.01131 18.6401 3.15525 18.5894 3.47418L16.9146 14.0232'
        stroke={'#F8F8F8'}
        strokeWidth={'0.4375'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </svg>
  );
};

export default News;
