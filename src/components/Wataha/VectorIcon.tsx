import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.21778 6.99303C4.49778 9.43187 6.56 11.4226 9.07556 12.6721L11.0311 10.7762C11.2711 10.5436 11.6267 10.466 11.9378 10.5694C12.9333 10.8883 14.0089 11.0606 15.1111 11.0606C15.6 11.0606 16 11.4484 16 11.9224V14.93C16 15.404 15.6 15.7918 15.1111 15.7918C6.76444 15.7918 0 9.23366 0 1.14156C0 0.667585 0.4 0.279785 0.888889 0.279785H4C4.48889 0.279785 4.88889 0.667585 4.88889 1.14156C4.88889 2.21879 5.06667 3.25292 5.39556 4.21811C5.49333 4.51973 5.42222 4.85583 5.17333 5.09712L3.21778 6.99303Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
