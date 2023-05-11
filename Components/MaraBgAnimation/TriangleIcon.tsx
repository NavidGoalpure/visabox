import { HTMLAttributes } from "react";

export const TriangleIcon: React.FC<HTMLAttributes<HTMLOrSVGElement>> = (
  props
) => {
  return (
    <svg
      {...props}
      width="69"
      height="65"
      viewBox="0 0 69 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M63.8881 60.8032L5.59341 52.4526L41.9726 6.14327L63.8881 60.8032Z"
        stroke="#505050"
        strokeWidth="6"
      />
    </svg>
  );
};
