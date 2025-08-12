// import React from "react";

// interface LoaderProps {
//   size?: number; // pixel size
//   color?: string; // CSS color value
//   ariaLabel?: string;
// }

// const Loader: React.FC<LoaderProps> = ({
//   size = 48,
//   color = "currentColor",
//   ariaLabel = "Loading...",
// }) => {
//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox="0 0 50 50"
//       role="img"
//       aria-label={ariaLabel}
//       xmlns="http://www.w3.org/2000/svg"
//       style={{ color }}
//       className="w-full mx-auto my-[100px]"
//     >
//       <title>{ariaLabel}</title>
//       <style>
//         {`
//           .ring { transform-origin: 25px 25px; animation: spin 1s linear infinite; }
//           @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
//         `}
//       </style>
//       <g className="ring">
//         <circle
//           cx="25"
//           cy="25"
//           r="20"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="4"
//           opacity="0.15"
//         />
//         <path
//           d="M45 25a20 20 0 0 1-20 20"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="4"
//           strokeLinecap="round"
//         />
//       </g>
//     </svg>
//   );
// };

// export default Loader;


import React from "react";

interface DotsLoaderProps {
    size?: number; // diameter of each dot
    color?: string; // CSS color value
    ariaLabel?: string;
}

const Loader: React.FC<DotsLoaderProps> = ({
    size = 12,
    color = "currentColor",
    ariaLabel = "Loading...",
}) => {
    const gap = size * 2.25; // spacing between dots
    const totalWidth = size * 3 + gap * 2;

    return (
        <svg
            width={totalWidth}
            height={size * 2}
            viewBox={`0 0 ${totalWidth} ${size * 2}`}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={ariaLabel}
            style={{ color }}
            className="w-full mx-auto my-[100px]"
        >
            <title>{ariaLabel}</title>
            <style>
                {`
          .dot { fill: currentColor; }
          .d1 { animation: pulse 1s infinite ease-in-out; }
          .d2 { animation: pulse 1s infinite ease-in-out 0.15s; }
          .d3 { animation: pulse 1s infinite ease-in-out 0.3s; }
          @keyframes pulse {
            0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
            40% { transform: translateY(-6px); opacity: 1; }
          }
        `}
            </style>
            <circle className="dot d1" cx={size} cy={size} r={size / 1.5} />
            <circle className="dot d2" cx={size + gap} cy={size} r={size / 1.5} />
            <circle className="dot d3" cx={size + gap * 2} cy={size} r={size / 1.5} />
        </svg>
    );
};

export default Loader;
