
interface LanguageProps {
  language: string;
}

const ProgrammingLanguageLogos = ({ language }: LanguageProps) => {
  const pythonLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
    >
      <linearGradient
        id="deviconPython0"
        x1="70.252"
        x2="170.659"
        y1="1237.476"
        y2="1151.089"
        gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#5a9fd4" />
        <stop offset="1" stop-color="#306998" />
      </linearGradient>
      <linearGradient
        id="deviconPython1"
        x1="209.474"
        x2="173.62"
        y1="1098.811"
        y2="1149.537"
        gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#ffd43b" />
        <stop offset="1" stop-color="#ffe873" />
      </linearGradient>
      <path
        fill="url(#deviconPython0)"
        d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007c-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521c-2.268 9.405-2.368 15.275 0 25.096c1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837c-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721c0 2.593-2.083 4.69-4.634 4.69c-2.56 0-4.633-2.097-4.633-4.69c-.001-2.604 2.073-4.721 4.633-4.721"
        transform="translate(0 10.26)"
      />
      <path
        fill="url(#deviconPython1)"
        d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547c7.816 2.297 15.312 2.713 24.665 0c6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519c2.578-7.735 2.467-15.174 0-25.096c-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692c0 2.602-2.074 4.719-4.634 4.719c-2.55 0-4.633-2.117-4.633-4.719c0-2.595 2.083-4.692 4.633-4.692"
        transform="translate(0 10.26)"
      />
      <radialGradient
        id="deviconPython2"
        cx="1825.678"
        cy="444.45"
        r="26.743"
        gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#b8b8b8" stop-opacity="0.498" />
        <stop offset="1" stop-color="#7f7f7f" stop-opacity="0" />
      </radialGradient>
      <path
        fill="url(#deviconPython2)"
        d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416c-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417"
        opacity="0.444"
      />
    </svg>
  );

  const javaScriptLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
    >
      <g fill="none">
        <rect width="256" height="256" fill="#f0db4f" rx="60" />
        <path
          fill="#323330"
          d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"
        />
      </g>
    </svg>
  );

  const cLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
    >
      <path
        fill="#283593"
        fill-rule="evenodd"
        d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
        clip-rule="evenodd"
      ></path>
      <path
        fill="#5c6bc0"
        fill-rule="evenodd"
        d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
        clip-rule="evenodd"
      ></path>
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
        clip-rule="evenodd"
      ></path>
      <path
        fill="#3949ab"
        fill-rule="evenodd"
        d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );

  const cPlusPlusLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
    >
      <path
        fill="#00549d"
        fill-rule="evenodd"
        d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
        clip-rule="evenodd"
      ></path>
      <path
        fill="#0086d4"
        fill-rule="evenodd"
        d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
        clip-rule="evenodd"
      ></path>
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
        clip-rule="evenodd"
      ></path>
      <path
        fill="#0075c0"
        fill-rule="evenodd"
        d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
        clip-rule="evenodd"
      ></path>
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M31 21H33V27H31zM38 21H40V27H38z"
        clip-rule="evenodd"
      ></path>
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M29 23H35V25H29zM36 23H42V25H36z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );

  const cSharpLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
    >
      <path
        fill="#00c853"
        d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0c3.355,1.883,13.451,7.551,16.807,9.434 C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867c0,0.762-0.418,1.466-1.097,1.847 c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0c-3.355-1.883-13.451-7.551-16.807-9.434 C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867c0-0.762,0.418-1.466,1.097-1.847 C9.451,10.837,19.549,5.169,22.903,3.286z"
      ></path>
      <path
        fill="#69f0ae"
        d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255c0-3.744,0-15.014,0-18.759 c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38c0.677-0.379,1.594-0.371,2.271,0.008 c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
      ></path>
      <path
        fill="#fff"
        d="M24,10c-7.73,0-14,6.27-14,14s6.27,14,14,14s14-6.27,14-14S31.73,10,24,10z M24,31 c-3.86,0-7-3.14-7-7s3.14-7,7-7s7,3.14,7,7S27.86,31,24,31z"
      ></path>
      <path
        fill="#00e676"
        d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784c0,3.795-0.032,14.589,0.009,18.384 c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
      ></path>
      <path fill="#fff" d="M34 20H35V28H34zM37 20H38V28H37z"></path>
      <path fill="#fff" d="M32 25H40V26H32zM32 22H40V23H32z"></path>
    </svg>
  );

  const javaLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
    >
      <path
        fill="#F44336"
        d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
      ></path>
      <path
        fill="#F44336"
        d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
      ></path>
      <g>
        <path
          fill="#1565C0"
          d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
        ></path>
        <path
          fill="#1565C0"
          d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
        ></path>
        <path
          fill="#1565C0"
          d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
        ></path>
        <path
          fill="#1565C0"
          d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
        ></path>
        <path
          fill="#1565C0"
          d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
        ></path>
      </g>
    </svg>
  );

  const typeScriptLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
    >
      <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect>
      <polygon
        fill="#fff"
        points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
      ></polygon>
      <path
        fill="#fff"
        d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
      ></path>
    </svg>
  );

  const cssLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
    >
      <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
      <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
      <path
        fill="#FFF"
        d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
      ></path>
      <path
        fill="#EEE"
        d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
      ></path>
    </svg>
  );

  const htmlLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
    >
      <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
      <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
      <path
        fill="#FFF"
        d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
      ></path>
      <path
        fill="#EEE"
        d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
      ></path>
    </svg>
  );

  const getLanguageLgo = () => {
    switch (language) {
      case "Python":
        return pythonLogo;
      case "JavaScript":
        return javaScriptLogo;
      case "C":
        return cLogo;
      case "C++":
        return cPlusPlusLogo;
      case "C#":
        return cSharpLogo;
      case "java":
        return javaLogo;
      case "TypeScript":
        return typeScriptLogo;
      case "CSS":
        return cssLogo;
      case "HTML":
        return htmlLogo;
      default:
        return null;
    }
  };
  return getLanguageLgo();
};

export default ProgrammingLanguageLogos;
