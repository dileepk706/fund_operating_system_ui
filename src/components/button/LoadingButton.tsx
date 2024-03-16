type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  size?: "small" | "medium" | "large";
  style?: React.CSSProperties;
  loading: boolean;
};

const LoadingButton = ({ onClick, label, size, style, loading }: Props) => {
  const Size = size === "small" ? s : size === "large" ? l : m;

  return (
    <button
      style={{
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        cursor: "pointer",
        borderRadius: "5px",
        ...Size,
        ...style,
      }}
      onClick={onClick}
    >
      {loading ? <Loading  width={1.5} /> : label}
    </button>
  );
};

export default LoadingButton;

const s = {
  padding: "7px 16px",
  margin: "4px 2px",
  fontSize: "16px",
};

const l = {
  padding: "20px 50px",
  margin: "4px 2px",
  fontSize: "20px",
};

const m = {
  padding: "15px 32px",
  margin: "4px 2px",
  fontSize: "16px",
};

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
