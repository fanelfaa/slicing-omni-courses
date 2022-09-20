import type { IconProps } from '.';

export const IconMessage = ({ w, width, h, height, boxSize }: IconProps) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height={boxSize ?? height ?? h ?? '1em'}
    width={boxSize ?? width ?? w ?? '1em'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.233V16H4V4h16v12z"></path>
    <path d="M7 7h10v2H7zm0 4h7v2H7z"></path>
  </svg>
);

export const IconSearch = ({ w, width, h, height, boxSize }: IconProps) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height={boxSize ?? height ?? h ?? '1em'}
    width={boxSize ?? width ?? w ?? '1em'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export const IconBell = ({ w, width, h, height, boxSize }: IconProps) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height={boxSize ?? height ?? h ?? '1em'}
    width={boxSize ?? width ?? w ?? '1em'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);
export const IconBook = ({ w, width, h, height, boxSize }: IconProps) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height={boxSize ?? height ?? h ?? '1em'}
    width={boxSize ?? width ?? w ?? '1em'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);
export const IconHome = ({ w, width, h, height, boxSize }: IconProps) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height={boxSize ?? height ?? h ?? '1em'}
    width={boxSize ?? width ?? w ?? '1em'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);
export const IconPieChart = ({ w, width, h, height, boxSize }: IconProps) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height={boxSize ?? height ?? h ?? '1em'}
    width={boxSize ?? width ?? w ?? '1em'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
  </svg>
);
export const IconBarChart = ({ w, width, h, height, boxSize }: IconProps) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height={boxSize ?? height ?? h ?? '1em'}
    width={boxSize ?? width ?? w ?? '1em'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);
export const IconSetting = ({ w, width, h, height, boxSize }: IconProps) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height={boxSize ?? height ?? h ?? '1em'}
    width={boxSize ?? width ?? w ?? '1em'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);
export const IconFile = ({ w, width, h, height, boxSize }: IconProps) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height={boxSize ?? height ?? h ?? '1em'}
    width={boxSize ?? width ?? w ?? '1em'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
    <polyline points="13 2 13 9 20 9"></polyline>
  </svg>
);
export const IconUsers = ({ w, width, h, height, boxSize }: IconProps) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height={boxSize ?? height ?? h ?? '1em'}
    width={boxSize ?? width ?? w ?? '1em'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);
export const IconCheckShield = ({
  w,
  width,
  h,
  height,
  boxSize,
}: IconProps) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height={boxSize ?? height ?? h ?? '1em'}
    width={boxSize ?? width ?? w ?? '1em'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z"></path>
    <path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z"></path>
  </svg>
);
export const IconLevel1 = ({ w, width, h, height, boxSize }: IconProps) => (
  <svg
    height={boxSize ?? height ?? h ?? '1em'}
    width={boxSize ?? width ?? w ?? '1em'}
    viewBox="0 0 10 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="6" width="2" height="6" fill="#FFA09C" />
    <rect x="4" y="3" width="2" height="9" fill="#C4C4C4" />
    <rect x="8" width="2" height="12" fill="#C4C4C4" />
  </svg>
);
export const IconLevel2 = ({ w, width, h, height, boxSize }: IconProps) => (
  <svg
    height={boxSize ?? height ?? h ?? '1em'}
    width={boxSize ?? width ?? w ?? '1em'}
    viewBox="0 0 10 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="6" width="2" height="6" fill="#FFA09C" />
    <rect x="4" y="3" width="2" height="9" fill="#FFA09C" />
    <rect x="8" width="2" height="12" fill="#C4C4C4" />
  </svg>
);
export const IconLevel3 = ({ w, width, h, height, boxSize }: IconProps) => (
  <svg
    height={boxSize ?? height ?? h ?? '1em'}
    width={boxSize ?? width ?? w ?? '1em'}
    viewBox="0 0 10 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="6" width="2" height="6" fill="#FFA09C" />
    <rect x="4" y="3" width="2" height="9" fill="#FFA09C" />
    <rect x="8" width="2" height="12" fill="#FFA09C" />
  </svg>
);
