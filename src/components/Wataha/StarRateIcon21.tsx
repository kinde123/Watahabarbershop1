import { memo, SVGProps } from 'react';

const StarRateIcon21 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_200_265)'>
      <path
        d='M10.8225 7.5L9 1.5L7.1775 7.5H1.5L6.135 10.8075L4.3725 16.5L9 12.9825L13.635 16.5L11.8725 10.8075L16.5 7.5H10.8225Z'
        fill='#F29D38'
      />
    </g>
    <defs>
      <clipPath id='clip0_200_265'>
        <rect width={18} height={18} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(StarRateIcon21);
export { Memo as StarRateIcon21 };
