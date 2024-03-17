import { useState } from "react";
import { Zise, l, m, s, xs } from "./Button";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode | string;
  size?: Zise;
  style?: React.CSSProperties;
  loading: boolean;
  loadingButtonWidth?: any;
};

const LoadingButton = ({
  onClick,
  children,
  size,
  style,
  loading,
  loadingButtonWidth,
}: Props) => {
  const [isActive, setIsActive] = useState(false);

  const Size =
    size === "small" ? s : size === "large" ? l : size === "xsmall" ? xs : m;

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };
  return (
    <button
      style={{
        border: "none",
        color: "white",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        cursor: "pointer",
        transform: isActive ? "scale(0.95)" : "scale(1)",
        transition: "transform 0.1s",
        ...Size,
        ...style,
      }}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      disabled={loading}
    >
      {loading ? <Loading width={loadingButtonWidth || 1.5} /> : children}
    </button>
  );
};

export default LoadingButton;

type LoadingProps = {
  width?: any;
};

export const Loading = ({ width }: LoadingProps) => {
  width = width || 1;
  const height = width || 1;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}em`}
      height={`${height}em`}
      viewBox="0 0 24 24"
    >
      <g>
        <rect width="2" height="5" x="11" y="1" fill="white" opacity="0.14" />
        <rect
          width="2"
          height="5"
          x="11"
          y="1"
          fill="white"
          opacity="0.29"
          transform="rotate(30 12 12)"
        />
        <rect
          width="2"
          height="5"
          x="11"
          y="1"
          fill="white"
          opacity="0.43"
          transform="rotate(60 12 12)"
        />
        <rect
          width="2"
          height="5"
          x="11"
          y="1"
          fill="white"
          opacity="0.57"
          transform="rotate(90 12 12)"
        />
        <rect
          width="2"
          height="5"
          x="11"
          y="1"
          fill="white"
          opacity="0.71"
          transform="rotate(120 12 12)"
        />
        <rect
          width="2"
          height="5"
          x="11"
          y="1"
          fill="white"
          opacity="0.86"
          transform="rotate(150 12 12)"
        />
        <rect
          width="2"
          height="5"
          x="11"
          y="1"
          fill="white"
          transform="rotate(180 12 12)"
        />
        <animateTransform
          attributeName="transform"
          calcMode="discrete"
          dur="0.75s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
        />
      </g>
    </svg>
  );
};

export const RefreshIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
  >
    <path
      fill="white"
      d="M256 0C179.9 0 111.7 33.4 64.9 86.2L0 21.3V192h170.7l-60.2-60.2C145.6 90.5 197.5 64 256 64c106 0 192 85.9 192 192s-86 192-192 192c-53 0-101-21.5-135.8-56.2L75 437c46.4 46.3 110.4 75 181 75c141.4 0 256-114.6 256-256S397.4 0 256 0m-21.3 106.7v170.7h128v-42.7h-85.3v-128z"
    />
  </svg>
);


export const EditIcon = ({ width }: LoadingProps) => {
  width = width || 1;
  const height = width || 1;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" fill-opacity="0" d="M20 7L17 4L8 13V16H11L20 7Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.15s" values="0;0.3"/></path><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21H21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="44" stroke-dashoffset="44" d="M7 17V13L17 3L21 7L11 17H7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.6s" values="44;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M14 6L18 10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"/></path></g></svg>
  );
};