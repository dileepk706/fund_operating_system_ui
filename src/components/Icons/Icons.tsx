type LoadingProps = {
  width?: any;
  color?: any;
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

export const RefreshIcon = ({ width }: LoadingProps) => {
  width = width || 1;
  const height = width || 1;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}em`}
      height={`${height}em`}
      viewBox="0 0 512 512"
    >
      <path
        fill="white"
        d="M256 0C179.9 0 111.7 33.4 64.9 86.2L0 21.3V192h170.7l-60.2-60.2C145.6 90.5 197.5 64 256 64c106 0 192 85.9 192 192s-86 192-192 192c-53 0-101-21.5-135.8-56.2L75 437c46.4 46.3 110.4 75 181 75c141.4 0 256-114.6 256-256S397.4 0 256 0m-21.3 106.7v170.7h128v-42.7h-85.3v-128z"
      />
    </svg>
  );
};

export const EditIcon = ({ width }: LoadingProps) => {
  width = width || 1;
  const height = width || 1;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}em`}
      height={`${height}em`}
      viewBox="0 0 24 24"
    >
      <path fill="black" fill-opacity="0" d="M20 7L17 4L8 13V16H11L20 7Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="1.2s"
          dur="0.15s"
          values="0;0.3"
        />
      </path>
      <g
        fill="none"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21H21">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.3s"
            values="20;0"
          />
        </path>
        <path
          stroke-dasharray="44"
          stroke-dashoffset="44"
          d="M7 17V13L17 3L21 7L11 17H7"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.4s"
            dur="0.6s"
            values="44;0"
          />
        </path>
        <path stroke-dasharray="8" stroke-dashoffset="8" d="M14 6L18 10">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1s"
            dur="0.2s"
            values="8;0"
          />
        </path>
      </g>
    </svg>
  );
};

export const CloseIcon = ({ width }: LoadingProps) => {
  width = width || 1;
  const height = width || 1;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}em`}
      height={`${height}em`}
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
        <path
          fill="black"
          d="M21.66 9.412c1.428 5.334-1.737 10.818-7.072 12.247c-4.598 1.232-9.304-.95-11.433-4.99a1 1 0 0 1 1.77-.932a8 8 0 1 0-.452-6.449l1.057-.235c1.186-.265 1.862 1.306.854 1.985L3.711 12.84c-.718.483-1.72-.016-1.713-.918a10.003 10.003 0 0 1 7.414-9.58C14.746.91 20.23 4.076 21.659 9.41M12 6a1 1 0 0 1 1 1v1h2a1 1 0 1 1 0 2h-5a.5.5 0 0 0 0 1h4a2.5 2.5 0 0 1 0 5h-1v1a1 1 0 1 1-2 0v-1H9a1 1 0 1 1 0-2h5a.5.5 0 0 0 0-1h-4a2.5 2.5 0 0 1 0-5h1V7a1 1 0 0 1 1-1"
        />
      </g>
    </svg>
  );
};
