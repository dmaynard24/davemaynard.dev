import * as React from "react";

const LinkedinLogo: React.FC = () => {
  return (
    <svg
      viewBox="0 0 512 512"
      width="100%"
      height="100%"
      className="social-logo"
    >
      <title>LinkedIn Logo</title>
      <g>
        <path
          d="M511.872 512V511.979H512V324.203C512 232.341 492.224 161.579 384.832 161.579C333.205 161.579 298.56 189.909 284.416 216.768H282.923V170.155H181.099V511.979H287.125V342.72C287.125 298.155 295.573 255.061 350.763 255.061C405.141 255.061 405.952 305.92 405.952 345.579V512H511.872Z"
          fill="black"
        />
        <path d="M8.44799 170.176H114.603V512H8.44799V170.176Z" fill="black" />
        <path
          d="M61.4827 0C27.5413 0 0 27.5413 0 61.4827C0 95.424 27.5413 123.541 61.4827 123.541C95.424 123.541 122.965 95.424 122.965 61.4827C122.944 27.5413 95.4027 0 61.4827 0V0Z"
          fill="black"
        />
      </g>
    </svg>
  );
};
LinkedinLogo.displayName = "LinkedinLogo";

export default LinkedinLogo;
