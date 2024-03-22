import { memo, SVGProps } from 'react';

const Ellipse28Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={2.5} cy={2.5} r={2.5} fill='black' />
  </svg>
);
const Memo = memo(Ellipse28Icon);
export { Memo as Ellipse28Icon };
