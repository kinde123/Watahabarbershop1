import { memo, SVGProps } from 'react';

const Ellipse7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 60 60'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <circle cx={30} cy={30} r={30} fill='url(#pattern0)' />
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width={1} height={1}>
        <use xlinkHref='#image0_200_183' transform='scale(0.004)' />
      </pattern>
      <image
        id='image0_200_183'
        width={250}
        height={250}
        xlinkHref='data:image/jpeg;base64,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'
      />
    </defs>
  </svg>
);
const Memo = memo(Ellipse7Icon);
export { Memo as Ellipse7Icon };