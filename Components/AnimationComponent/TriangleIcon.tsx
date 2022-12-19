import { HTMLAttributes } from "react";

export const TriangleIcon: React.FC<HTMLAttributes<HTMLOrSVGElement>> = (props) => {
  return (
    <svg
    {...props}
      width="69"
      height="66"
      viewBox="0 0 69 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.21112 61.949L24.4107 6.27694L63.0243 50.7402L5.21112 61.949Z"
        stroke="#1BADA1"
        strokeWidth="6"
      />
    </svg>
  );
};