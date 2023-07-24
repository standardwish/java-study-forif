import { IconMode } from "@/types/type";

const ShrinkArrow = ({ darkMode }: IconMode) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="30"
    viewBox="0 -960 960 960"
    width="30"
    className={darkMode ? "fill-white" : ""}
  >
    <path d="m283-345-43-43 240-240 240 239-43 43-197-197-197 198Z" />
  </svg>
);

export default ShrinkArrow;
