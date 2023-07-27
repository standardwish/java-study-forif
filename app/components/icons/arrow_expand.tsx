import type { ArrowProp } from "@/types/type";

const ExpandArrow = ({ classname }: ArrowProp) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="30"
    viewBox="0 -960 960 960"
    width="30"
    className={classname}
  >
    <path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
  </svg>
);

export default ExpandArrow;
