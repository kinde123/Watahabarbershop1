import { memo, SVGProps } from 'react';

const Rectangle7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 360 86' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H360V86H0V0Z' fill='#1B1B1B' fillOpacity={0.56} />
  </svg>
);
const Memo = memo(Rectangle7Icon);
export { Memo as Rectangle7Icon };
