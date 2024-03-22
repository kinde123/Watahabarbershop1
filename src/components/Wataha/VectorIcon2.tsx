import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8 0.194824C3.57714 0.194824 0 2.62245 0 5.62402C0 9.69592 8 15.7068 8 15.7068C8 15.7068 16 9.69592 16 5.62402C16 2.62245 12.4229 0.194824 8 0.194824ZM8 7.56302C6.42286 7.56302 5.14286 6.69435 5.14286 5.62402C5.14286 4.5537 6.42286 3.68502 8 3.68502C9.57714 3.68502 10.8571 4.5537 10.8571 5.62402C10.8571 6.69435 9.57714 7.56302 8 7.56302Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
